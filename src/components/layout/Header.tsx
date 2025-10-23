import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGettingStartedOpen, setIsGettingStartedOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const navigate = useNavigate();
  
  let dropdownTimeout: NodeJS.Timeout;
  let platformDropdownTimeout: NodeJS.Timeout;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsGettingStartedOpen(true);
  };
  
  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsGettingStartedOpen(false);
    }, 100);
  };

  const handlePlatformDropdownEnter = () => {
    clearTimeout(platformDropdownTimeout);
    setIsPlatformOpen(true);
  };
  
  const handlePlatformDropdownLeave = () => {
    platformDropdownTimeout = setTimeout(() => {
      setIsPlatformOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              Clause
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            <nav className="flex items-center space-x-8 mr-24">
              
              {/* Platform Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handlePlatformDropdownEnter}
                onMouseLeave={handlePlatformDropdownLeave}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 py-2"
                >
                  <span>Platform</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isPlatformOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPlatformOpen && (
                  <div 
                    className="absolute top-full left-0 pt-1 w-56 z-50"
                  >
                    <div className="bg-white rounded-md shadow-lg border border-gray-200 py-2">
                      <Link 
                        to="/assistant" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      >
                        Assistant
                      </Link>
                      <Link 
                        to="/reviewer" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      >
                        Reviewer
                      </Link>
                      <Link 
                        to="/explorer" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      >
                        Explorer
                      </Link>
                      <Link 
                        to="/integratedservices" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      >
                        Integrated Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Getting Started Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 py-2"
                >
                  <span>Getting Started</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isGettingStartedOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isGettingStartedOpen && (
                  <div 
                    className="absolute top-full left-0 pt-1 w-56 z-50"
                  >
                    <div className="bg-white rounded-md shadow-lg border border-gray-200 py-2">
                      <Link 
                        to="/gettingstarted" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      >
                        Individual Setup
                        <p className="text-xs text-gray-500 mt-1">Install Clause in your Word</p>
                      </Link>
                      <Link 
                        to="/organization-setup" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      >
                        Organization Setup
                        <p className="text-xs text-gray-500 mt-1">Deploy Clause across your org</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/pricing" className="text-gray-700 hover:text-primary-600">Pricing</Link>
              <Link to="/faq" className="text-gray-700 hover:text-primary-600">FAQ</Link>
              <a href="https://clauseai.substack.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600">Blog</a>
            </nav>
            
            <Button variant="primary" onClick={() => window.open('https://app.clause.to', '_blank')}>
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="text-gray-700 md:hidden" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full mt-0 w-full bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4">
              
              {/* Mobile Platform Section */}
              <div className="border-l-2 border-primary-600 pl-3">
                <p className="text-sm font-medium text-gray-900 mb-2">Platform</p>
                <div className="space-y-2">
                  <Link to="/assistant" className="block text-sm text-gray-600 hover:text-primary-600" onClick={toggleMenu}>
                    Assistant
                  </Link>
                  <Link to="/reviewer" className="block text-sm text-gray-600 hover:text-primary-600" onClick={toggleMenu}>
                    Reviewer
                  </Link>
                  <Link to="/explorer" className="block text-sm text-gray-600 hover:text-primary-600" onClick={toggleMenu}>
                    Explorer
                  </Link>
                  <Link to="/integratedservices" className="block text-sm text-gray-600 hover:text-primary-600" onClick={toggleMenu}>
                    Integrated Services
                  </Link>
                </div>
              </div>
              
              {/* Mobile Getting Started Section */}
              <div className="border-l-2 border-primary-600 pl-3">
                <p className="text-sm font-medium text-gray-900 mb-2">Getting Started</p>
                <div className="space-y-2">
                  <Link to="/gettingstarted" className="block text-sm text-gray-600 hover:text-primary-600" onClick={toggleMenu}>
                    Individual Setup
                  </Link>
                  <Link to="/organization-setup" className="block text-sm text-gray-600 hover:text-primary-600" onClick={toggleMenu}>
                    Organization Setup
                  </Link>
                </div>
              </div>
              
              <Link to="/pricing" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Pricing</Link>
              <Link to="/faq" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>FAQ</Link>
              <a href="https://clauseai.substack.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Blog</a>
              <Button variant="primary" onClick={() => {
                window.open('https://app.clause.to', '_blank');
                toggleMenu();
              }}>
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;