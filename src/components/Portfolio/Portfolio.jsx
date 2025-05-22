import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: "Mpumalanga Gold Mine Acquisition",
    subtitle: "Mpumalanga Gold Project",
    category: "Gold Mining",
    date: "Completed 2023",
    description: "Facilitated the acquisition of a mid-tier gold mine in Mpumalanga province, connecting international investors with local mining rights holders.",
    stats: {
      investment: "$42.5 Million",
      roi: "27.8%",
      jobs: "350+"
    }
  },
  {
    title: "Eastern Cape Chrome Export Program",
    subtitle: "Chrome Trading Program",
    category: "Commodity Trading",
    date: "Ongoing since 2021",
    description: "Established a sustainable chrome trading program connecting small-scale miners with international buyers, creating consistent revenue streams for local communities.",
    stats: {
      volume: "120,000 MT",
      premium: "12.5%",
      impact: "5 Villages"
    }
  }
];

const timelineItems = [
  {
    year: "2018: Company Founded",
    description: "LLM International established with a focus on chrome trading in the Eastern Cape region."
  },
  {
    year: "2019: First Major Contract",
    description: "Secured exclusive mandate to represent a mid-tier gold mine, resulting in successful international investment."
  },
  {
    year: "2021: Expansion to Coal Trading",
    description: "Added coal trading services and established logistics partnerships to ensure reliable delivery."
  },
  {
    year: "2022: AI Price Intelligence Platform",
    description: "Launched proprietary commodity price forecasting system, improving trading margins by 15%."
  },
  {
    year: "2023: International Office Expansion",
    description: "Opened satellite offices in Dubai and Singapore to better serve global clients and investors."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold mb-4"
          >
            Our <span className="text-gold">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Showcasing our successful projects and the tangible impact we've created for our clients and communities.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold mx-auto mt-4"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
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
                      <rect x="70" y="70" width="260" height="60" fill="#777777"/>
                      <path d="M80,150 L180,100 L320,180 L320,220 L80,220 Z" fill="#C5A028" opacity="0.8"/>
                    </>
                  )}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 py-2 px-4 rounded">
                    <p className="font-serif text-lg font-bold">{study.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gold-light bg-opacity-20 text-gold-dark text-sm font-medium py-1 px-3 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-charcoal-light text-sm">{study.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.title}</h3>
                <p className="text-charcoal-light mb-4">
                  {study.description}
                </p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    {Object.entries(study.stats).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm text-charcoal-light">
                          {key === 'investment' && 'Investment Value'}
                          {key === 'roi' && 'ROI (36 months)'}
                          {key === 'jobs' && 'Jobs Created'}
                          {key === 'volume' && 'Annual Volume'}
                          {key === 'premium' && 'Price Premium'}
                          {key === 'impact' && 'Community Impact'}
                        </p>
                        <p className={`font-bold ${key === 'roi' || key === 'premium' ? 'text-gold' : 'text-charcoal'}`}>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Timeline */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-bold mb-8 text-center"
          >
            Our Growth Timeline
          </motion.h3>
          
          <div className="relative border-l-2 border-gold pl-10 ml-6">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative timeline-item"
              >
                <h4 className="font-serif text-xl font-bold mb-2">{item.year}</h4>
                <p className="text-charcoal-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;