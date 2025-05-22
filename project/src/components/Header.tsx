import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 shadow-md z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <Logo />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold">LLM <span className="text-gold">International</span></h1>
            <p className="text-xs text-charcoal-light">Empowering Africa’s Mineral Future</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'services', 'portfolio', 'team', 'insights', 'contact'].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)} 
              className="nav-link text-charcoal hover:text-gold transition duration-300 capitalize"
            >
              {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button className="text-charcoal focus:outline-none" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full border-t border-gray-200 transition-all duration-300`}>
        <div className="container mx-auto px-4 py-2">
          {['home', 'about', 'services', 'portfolio', 'team', 'insights', 'contact'].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)} 
              className="block py-2 text-charcoal hover:text-gold w-full text-left capitalize"
            >
              {section === 'home' ? 'Home' : section === 'about' ? 'About Us' : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;