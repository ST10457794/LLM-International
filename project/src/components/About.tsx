import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            if (delay) {
              entry.target.classList.add(`delay-${delay}`);
            }
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-item');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">About <span className="text-gold">LLM International</span></h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="animate-item bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold" data-delay="100">
            <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-charcoal-light">
              To be the undisputed leader in sustainable and ethical resource trade in Southern Africa, creating lasting value for communities, investors, and the global market.
            </p>
          </div>
          
          <div className="animate-item bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold" data-delay="200">
            <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-charcoal-light">
              We facilitate efficient, transparent, and ethical trading of high-demand commodities, connecting African resources with global markets while ensuring sustainable practices and community benefits.
            </p>
          </div>
          
          <div className="animate-item bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold" data-delay="300">
            <h3 className="font-serif text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-2 text-charcoal-light">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Integrity in all transactions</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Community upliftment</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Operational efficiency</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Innovation in resource management</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="gold-gradient py-16 px-8 rounded-lg text-center">
            <h3 className="font-serif text-3xl font-bold mb-6">Our Commitment to Excellence</h3>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              At LLM International, we believe that Africa's mineral wealth should be a catalyst for sustainable economic growth. Our approach combines local expertise with global standards to ensure that every transaction creates value for all stakeholders.
            </p>
            <a href="#contact" className="inline-block bg-charcoal hover:bg-charcoal-dark text-white font-medium py-3 px-8 rounded-md transition duration-300">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;