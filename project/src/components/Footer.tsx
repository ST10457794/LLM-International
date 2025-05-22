import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2 bg-white p-1 rounded">
                <Logo />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold">LLM <span className="text-gold">International</span></h2>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Bridging African resources with global markets through ethical sourcing, transparent trading, and sustainable management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-gold transition duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition duration-300">Our Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-gold transition duration-300">Project Portfolio</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-gold transition duration-300">Our Team</a></li>
              <li><a href="#insights" className="text-gray-300 hover:text-gold transition duration-300">Market Insights</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-gold transition duration-300">Commodity Trading</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition duration-300">Brokerage Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition duration-300">Joint Ventures</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition duration-300">Mine Acquisition</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition duration-300">Logistics & Shipping</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition duration-300">Market Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition duration-300">Disclaimer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition duration-300">Anti-Corruption Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition duration-300">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} LLM International. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed with excellence | <a href="https://www.pmulesotho.com/" className="text-gold hover:underline">PICKMEUP DEVELOPERS</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;