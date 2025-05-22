import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="service-card bg-white rounded-lg shadow-lg overflow-hidden opacity-0"
      style={{ animationDelay: `${delay * 0.1}s` }}
      data-aos="fade-up"
      data-aos-delay={delay * 100}
    >
      <div className="h-2 bg-gold"></div>
      <div className="p-8">
        <div className="w-16 h-16 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-bold mb-3">{title}</h3>
        <p className="text-charcoal-light mb-4">
          {description}
        </p>
        <a href="#" className="text-gold hover:text-gold-dark font-medium flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;