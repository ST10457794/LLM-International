import React, { useEffect, useRef } from 'react';

interface ArticleCardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  index: number;
  news:string;
  image:string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, category, date, description, index, news, image }) => {
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
        {/* Replace the SVG with an image */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
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
        <a href={news} className="text-gold hover:text-gold-dark font-medium flex items-center text-sm" target="_blank" rel="noopener noreferrer">
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
  
};

export default ArticleCard;