import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Jonathan Nkosi",
    position: "Chief Executive Officer",
    bio: "With 20+ years in African mining and commodities, Jonathan brings unparalleled expertise in resource development and international trade relations."
  },
  {
    name: "Sarah Mokoena",
    position: "Chief Operations Officer",
    bio: "Former mining executive with extensive experience in operational efficiency and sustainable resource management across Southern Africa."
  },
  {
    name: "Michael van der Merwe",
    position: "Chief Financial Officer",
    bio: "Financial strategist with expertise in mining investments, international trade finance, and commodity market analysis."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 mining-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold mb-4"
          >
            Our <span className="text-gold">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Meet the experts who drive our success through their deep industry knowledge and commitment to excellence.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold mx-auto mt-4"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 bg-charcoal-light relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#444444"/>
                  <circle cx="200" cy="120" r="80" fill="#666666"/>
                  <circle cx="200" cy="100" r="40" fill="#888888"/>
                  <path d="M120,180 C120,230 280,230 280,180 L280,300 L120,300 Z" fill="#666666"/>
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gold mb-3">{member.position}</p>
                <p className="text-charcoal-light text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-charcoal hover:text-gold transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-charcoal hover:text-gold transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-block bg-charcoal hover:bg-charcoal-dark text-white font-medium py-3 px-8 rounded-md transition duration-300">
            Join Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;