import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
              Redline
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600">Pricing</Link>
            <Link to="/faq" className="text-gray-700 hover:text-primary-600">FAQ</Link>
            <Button variant="primary" onClick={() => navigate('/pricing')}>
              Get Started
            </Button>
          </nav>

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
              <Link to="/" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Home</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Pricing</Link>
              <Link to="/faq" className="text-gray-700 hover:text-primary-600" onClick={toggleMenu}>FAQ</Link>
              <Button variant="primary" onClick={() => {
                navigate('/pricing');
                toggleMenu();
              }}>
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;