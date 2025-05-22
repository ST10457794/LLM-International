import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 mining-texture">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Elevating <span className="text-gold">African Resources</span> to Global Excellence
            </motion.h2>
            <p className="text-lg mb-8 max-w-lg">
              LLM International bridges Southern Africa's mineral wealth with global markets through ethical sourcing, transparent trading, and sustainable resource management.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#services" className="bg-gold hover:bg-gold-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 text-center">
                Explore Our Services
              </a>
              <a href="#contact" className="border-2 border-charcoal hover:bg-charcoal hover:text-white text-charcoal font-medium py-3 px-6 rounded-md transition duration-300 text-center">
                Contact Our Team
              </a>
            </div>
          </div>
          <div className="md:w-1/2 slide-in">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <svg className="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#AA8C2C" stopOpacity="0.9"/>
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="500" height="300" fill="#f5f5f5" rx="10"/>
                <path d="M50,150 L200,50 L350,150 L500,100 L550,150 L550,350 L50,350 Z" fill="url(#goldGradient)"/>
                <circle cx="150" cy="100" r="30" fill="#333333" opacity="0.8"/>
                <circle cx="400" cy="120" r="40" fill="#333333" opacity="0.7"/>
                <path d="M100,200 L200,180 L300,220 L400,190 L500,210 L500,350 L100,350 Z" fill="#333333" opacity="0.6"/>
                <path d="M50,250 L150,230 L250,260 L350,240 L450,270 L550,250 L550,350 L50,350 Z" fill="#D4AF37" opacity="0.5"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-12 bg-gold"></div>
                    <div>
                      <p className="font-serif text-xl font-medium">Global Presence</p>
                      <p className="text-sm text-charcoal-light">Operating across 4 continents</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;