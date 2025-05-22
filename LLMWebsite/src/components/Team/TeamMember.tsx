import React, { useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  delay?: number;
  image: string;
  linkedin?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, bio, delay = 0, image, linkedin }) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in');
            }, delay * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={memberRef} className="bg-white rounded-lg shadow-lg overflow-hidden opacity-0 transition-opacity duration-700">
      <div className="h-64 bg-charcoal-light relative">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif text-xl font-bold mb-1">{name}</h3>
        <p className="text-gold mb-3">{position}</p>
        <p className="text-charcoal-light text-sm mb-4">
          {bio}
        </p>
        <div className="flex justify-center space-x-4">
        
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-gold transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
          
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
