import React from 'react';
import ArticleCard from './ArticleCard';
import { articles } from './articlesData';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Market <span className="text-gold">Insights</span></h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Stay informed with our latest analysis, industry trends, and expert perspectives on the commodity market.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard 
              key={index} 
              title={article.title}
              category={article.category}
              date={article.date}
              description={article.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block border-2 border-gold hover:bg-gold hover:text-white text-gold font-medium py-3 px-8 rounded-md transition duration-300">
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;