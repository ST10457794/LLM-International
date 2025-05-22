import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-95 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L25 10L35 15L25 20L20 30L15 20L5 15L15 10L20 0Z" fill="#C5A028"/>
              <path d="M20 5L23 11L29 14L23 17L20 23L17 17L11 14L17 11L20 5Z" fill="#333333"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold">LLM <span className="text-gold">International</span></h1>
            <p className="text-xs text-charcoal-light">Unlocking Africa's Resource Potential</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="#home" className="nav-link text-charcoal hover:text-gold transition duration-300">Home</Link>
          <Link to="#about" className="nav-link text-charcoal hover:text-gold transition duration-300">About Us</Link>
          <Link to="#services" className="nav-link text-charcoal hover:text-gold transition duration-300">Services</Link>
          <Link to="#portfolio" className="nav-link text-charcoal hover:text-gold transition duration-300">Portfolio</Link>
          <Link to="#team" className="nav-link text-charcoal hover:text-gold transition duration-300">Team</Link>
          <Link to="#insights" className="nav-link text-charcoal hover:text-gold transition duration-300">Insights</Link>
          <Link to="#contact" className="nav-link text-charcoal hover:text-gold transition duration-300">Contact</Link>
        </nav>
        
        <div className="md:hidden">
          <button id="menu-toggle" className="text-charcoal focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full border-t border-gray-200`}>
        <div className="container mx-auto px-4 py-2">
          <Link to="#home" className="block py-2 text-charcoal hover:text-gold" onClick={toggleMobileMenu}>Home</Link>
          <Link to="#about" className="block py-2 text-charcoal hover:text-gold" onClick={toggleMobileMenu}>About Us</Link>
          <Link to="#services" className="block py-2 text-charcoal hover:text-gold" onClick={toggleMobileMenu}>Services</Link>
          <Link to="#portfolio" className="block py-2 text-charcoal hover:text-gold" onClick={toggleMobileMenu}>Portfolio</Link>
          <Link to="#team" className="block py-2 text-charcoal hover:text-gold" onClick={toggleMobileMenu}>Team</Link>
          <Link to="#insights" className="block py-2 text-charcoal hover:text-gold" onClick={toggleMobileMenu}>Insights</Link>
          <Link to="#contact" className="block py-2 text-charcoal hover:text-gold" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;