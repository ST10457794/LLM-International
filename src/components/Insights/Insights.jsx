import { motion } from 'framer-motion';

const articles = [
  {
    title: "The Future of Chrome Trading in a Green Economy",
    category: "Market Analysis",
    date: "June 15, 2023",
    description: "As the world transitions to sustainable energy, how will chrome demand evolve and what opportunities exist for African producers?"
  },
  {
    title: "Ethical Mining Practices: The New Competitive Edge",
    category: "Industry Trends",
    date: "May 22, 2023",
    description: "How responsible sourcing and community engagement are becoming essential factors in successful mining operations."
  },
  {
    title: "Navigating Commodity Price Volatility in Uncertain Times",
    category: "Investment Guide",
    date: "April 8, 2023",
    description: "Strategic approaches to managing risk and maximizing returns in the face of global economic fluctuations."
  }
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold mb-4"
          >
            Market <span className="text-gold">Insights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Stay informed with our latest analysis, industry trends, and expert perspectives on the commodity market.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold mx-auto mt-4"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-charcoal relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#333333"/>
                  {index === 0 ? (
                    <>
                      <path d="M0,100 L100,70 L200,120 L300,80 L400,110 L400,200 L0,200 Z" fill="#C5A028" opacity="0.7"/>
                      <circle cx="100" cy="70" r="10" fill="#ffffff" opacity="0.5"/>
                      <circle cx="200" cy="120" r="10" fill="#ffffff" opacity="0.5"/>
                      <circle cx="300" cy="80" r="10" fill="#ffffff" opacity="0.5"/>
                    </>
                  ) : index === 1 ? (
                    <>
                      <rect x="50" y="50" width="300" height="100" fill="#555555"/>
                      <rect x="70" y="70" width="260" height="60" fill="#777777"/>
                      <circle cx="200" cy="100" r="30" fill="#C5A028" opacity="0.8"/>
                    </>
                  ) : (
                    <>
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
                  <span className="bg-gold-light bg-opacity-20 text-gold-dark text-xs font-medium py-1 px-2 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-charcoal-light text-xs">{article.date}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-charcoal-light text-sm mb-4">
                  {article.description}
                </p>
                <a href="#" className="text-gold hover:text-gold-dark font-medium flex items-center text-sm">
                  Read Full Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
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
          <a href="#" className="inline-block border-2 border-gold hover:bg-gold hover:text-white text-gold font-medium py-3 px-8 rounded-md transition duration-300">
            View All Insights
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;