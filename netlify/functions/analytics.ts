import { Handler } from '@netlify/functions';
import { BlobServiceClient } from '@azure/storage-blob';

interface AnalyticsEvent {
  eventType: string;
  eventData?: Record<string, any>;
  page?: string;
  sessionId?: string;
  referrer?: string;
  screenResolution?: string;
  viewportSize?: string;
  timestamp?: string;
}

export const handler: Handler = async (event) => {
  // CORS headers for your frontend
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse incoming analytics event
    const analyticsEvent: AnalyticsEvent = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!analyticsEvent.eventType) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'eventType is required' }),
      };
    }

    // Get configuration from environment
    const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
    const containerName = process.env.AZURE_CONTAINER_NAME || 'marketing-site';

    if (!connectionString) {
      console.error('AZURE_STORAGE_CONNECTION_STRING not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Connect to Azure Blob Storage
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Create folder structure: site_analytics/2025-11-07/events-timestamp.json
    const now = new Date();
    const dateFolder = now.toISOString().split('T')[0]; // 2025-11-07
    const timestamp = now.toISOString();
    const blobName = `site_analytics/${dateFolder}/event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.json`;

    // Enrich event with server-side data
    const enrichedEvent = {
      ...analyticsEvent,
      timestamp: analyticsEvent.timestamp || timestamp,
      serverReceivedAt: timestamp,
      serverData: {
        ip: event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown',
        userAgent: event.headers['user-agent'] || 'unknown',
        country: event.headers['x-country'] || undefined,
        city: event.headers['x-city'] || undefined,
      },
    };

    // Upload to blob storage
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const content = JSON.stringify(enrichedEvent, null, 2);

    await blockBlobClient.upload(
      content,
      Buffer.byteLength(content),
      {
        blobHTTPHeaders: {
          blobContentType: 'application/json',
        },
      }
    );

    console.log(`Analytics event logged: ${analyticsEvent.eventType} -> ${blobName}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        eventType: analyticsEvent.eventType,
      }),
    };

  } catch (error) {
    console.error('Analytics error:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to log analytics event',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};
