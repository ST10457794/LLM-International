import React, { useEffect, useRef } from 'react';

interface ArticleCardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, category, date, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div ref={cardRef} className="bg-white rounded-lg shadow-lg overflow-hidden opacity-0">
      <div className="h-48 bg-charcoal relative">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          {index === 0 && (
            <>
              <rect width="400" height="200" fill="#333333"/>
              <path d="M0,100 L100,70 L200,120 L300,80 L400,110 L400,200 L0,200 Z" fill="#C5A028" opacity="0.7"/>
              <circle cx="100" cy="70" r="10" fill="#ffffff" opacity="0.5"/>
              <circle cx="200" cy="120" r="10" fill="#ffffff" opacity="0.5"/>
              <circle cx="300" cy="80" r="10" fill="#ffffff" opacity="0.5"/>
            </>
          )}
          {index === 1 && (
            <>
              <rect width="400" height="200" fill="#333333"/>
              <rect x="50" y="50" width="300" height="100" fill="#555555"/>
              <rect x="70" y="70" width="260" height="60" fill="#777777"/>
              <circle cx="200" cy="100" r="30" fill="#C5A028" opacity="0.8"/>
            </>
          )}
          {index === 2 && (
            <>
              <rect width="400" height="200" fill="#333333"/>
              <path d="M0,150 L50,130 L100,150 L150,120 L200,140 L250,110 L300,130 L350,100 L400,120 L400,200 L0,200 Z" fill="#C5A028" opacity="0.6"/>
              <line x1="0" y1="150" x2="400" y2="150" stroke="#ffffff" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
              <line x1="0" y1="100" x2="400" y2="100" stroke="#ffffff" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
              <line x1="0" y1="50" x2="400" y2="50" stroke="#ffffff" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
            </>
          )}
        </svg>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-gold-light bg-opacity-20 text-gold-dark text-xs font-medium py-1 px-2 rounded-full">{category}</span>
          <span className="text-charcoal-light text-xs">{date}</span>
        </div>
        <h3 className="font-serif text-xl font-bold mb-3">{title}</h3>
        <p className="text-charcoal-light text-sm mb-4">
          {description}
        </p>
        <a href="#" className="text-gold hover:text-gold-dark font-medium flex items-center text-sm">
          Read Full Article
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;