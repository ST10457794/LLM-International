import React, { useEffect, useRef } from 'react';

interface StatItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CaseStudyProps {
  title: string;
  category: string;
  year: string;
  description: string;
  stats: StatItem[];
  index: number;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, category, year, description, stats, index }) => {
  const caseStudyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.animationDelay = `${index * 0.2}s`;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (caseStudyRef.current) {
      observer.observe(caseStudyRef.current);
    }

    return () => {
      if (caseStudyRef.current) {
        observer.unobserve(caseStudyRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={caseStudyRef} 
      className="bg-white rounded-lg shadow-lg overflow-hidden opacity-0" 
      style={{ transform: 'translateY(20px)' }}
    >
      <div className="h-64 bg-charcoal relative">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#333333"/>
          {index === 0 ? (
            <>
              <path d="M0,150 L100,100 L200,180 L300,120 L400,150 L400,300 L0,300 Z" fill="#C5A028" opacity="0.7"/>
              <circle cx="100" cy="100" r="20" fill="#ffffff" opacity="0.2"/>
              <circle cx="300" cy="120" r="30" fill="#ffffff" opacity="0.2"/>
            </>
          ) : (
            <>
              <rect x="50" y="50" width="300" height="200" fill="#555555"/>
              <rect x="80" y="80" width="240" height="140" fill="#777777"/>
              <path d="M80,150 L180,100 L320,180 L320,220 L80,220 Z" fill="#C5A028" opacity="0.8"/>
            </>
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 py-2 px-4 rounded">
            <p className="font-serif text-lg font-bold">{title.split(' ')[0]} {title.split(' ')[1]}</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-gold-light bg-opacity-20 text-gold-dark text-sm font-medium py-1 px-3 rounded-full">{category}</span>
          <span className="text-charcoal-light text-sm">{index === 0 ? `Completed ${year}` : `Ongoing since ${year}`}</span>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-3">{title}</h3>
        <p className="text-charcoal-light mb-4">{description}</p>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between items-center">
            {stats.map((stat, statIndex) => (
              <div key={statIndex}>
                <p className="text-sm text-charcoal-light">{stat.label}</p>
                <p className={`font-bold ${stat.highlight ? 'text-gold' : 'text-charcoal'}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;