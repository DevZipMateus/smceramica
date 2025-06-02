
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-3'}`}>
      {/* Top Bar with Contact Info */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-3 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-neutral-600 mb-2 md:mb-0 items-center">
            <a href="mailto:rogerio.catelan@hotmail.com" className="flex items-center hover:text-neutral-800 transition-colors duration-300 mb-1 md:mb-0">
              <Mail size={16} className="mr-2" />
              rogerio.catelan@hotmail.com
            </a>
            <div className="flex flex-col md:flex-row md:space-x-4 items-center">
              <a href="tel:+5511968209575" className="flex items-center hover:text-neutral-800 transition-colors duration-300 whitespace-nowrap">
                <Phone size={16} className="mr-2" />
                (11) 96820-9575
              </a>
              <span className="hidden md:inline text-neutral-400">|</span>
              <a href="tel:+551140431840" className="flex items-center hover:text-neutral-800 transition-colors duration-300 whitespace-nowrap">
                <Phone size={16} className="mr-2" />
                (11) 4043-1840
              </a>
            </div>
          </div>
          
          {/* Address */}
          <div className="text-sm text-neutral-600 text-center md:text-right">
            Rua Moema, 54, Vila Conceição, Diadema - SP
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/lovable-uploads/03b6ed5b-4d32-4382-b318-479213e8a8c4.png" 
              alt="Santa Maria Indústria de Abrasivos Cerâmicos - Fabricante de abrasivos cerâmicos para tamboreamento e vibroacabamento" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#about" className="nav-link">Sobre Nós</a>
            <a href="#services" className="nav-link">Produtos</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-600 hover:text-neutral-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Abrir menu de navegação"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-4">
          <Link to="/" className="px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-md" onClick={toggleMobileMenu}>Sobre Nós</a>
          <a href="#services" className="px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-md" onClick={toggleMobileMenu}>Produtos</a>
          <a href="#contact" className="px-4 py-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
