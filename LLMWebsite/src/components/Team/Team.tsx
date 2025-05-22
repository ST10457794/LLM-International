import React from 'react';
import TeamMember from './TeamMember';
import { teamMembers } from './teamData';


const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 mining-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Our <span className="text-gold">Team</span></h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Meet the team who drive our success through their deep industry knowledge and commitment to excellence.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              bio={member.bio}
              delay={index}
              image= {member.image}
              linkedin={member.linkedin}
              
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block bg-charcoal hover:bg-charcoal-dark text-white font-medium py-3 px-8 rounded-md transition duration-300">
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;