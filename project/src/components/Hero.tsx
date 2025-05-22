import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-element');
    fadeElements?.forEach((el) => observer.observe(el));

    const slideElements = sectionRef.current?.querySelectorAll('.slide-element');
    slideElements?.forEach((el) => observer.observe(el));

    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el));
      slideElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="pt-32 pb-20 mining-texture">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="fade-element">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevating <span className="text-gold">African Resources</span> to Global Excellence
              </h2>
              <p className="text-lg mb-8 max-w-lg">
                LLM International bridges Southern Africa's mineral wealth with global markets through ethical sourcing, transparent trading, and sustainable resource management.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#services" className="bg-gold hover:bg-gold-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 text-center">
                  Explore Our Services
                </a>
                <a href="#contact" className="border-2 border-charcoal hover:bg-charcoal hover:text-white text-charcoal font-medium py-3 px-6 rounded-md transition duration-300 text-center">
                Partner With Us
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 slide-element">
            <div className="relative">
            <img 
                src="https://assets.weforum.org/article/image/large_FZHTGjXwUDs8HQNEk1tOh4Dfe039k54ejVzogsuRq5A.jpg" 
                alt="Mining Operation" 
                className="w-full h-auto object-cover rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-12 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-12 bg-gold"></div>
                    <div>
                      <p className="font-serif text-xl font-medium">Continental Presence</p>
                      <p className="text-sm text-charcoal-light">From African mines to global supply chains—trusted where it matters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;