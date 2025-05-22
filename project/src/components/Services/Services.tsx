import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50 mining-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Our <span className="text-gold">Services</span></h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Comprehensive solutions for resource acquisition, trading, and management tailored to the unique demands of the African commodity market.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block bg-gold hover:bg-gold-dark text-white font-medium py-3 px-8 rounded-md transition duration-300">
            Request Custom Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;