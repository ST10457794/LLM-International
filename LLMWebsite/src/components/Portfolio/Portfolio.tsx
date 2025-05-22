import React from 'react';
import TimelineItem from './TimelineItem';
import CaseStudy from './CaseStudy';

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      title: "Mpumalanga Gold Mine Acquisition",
      category: "Gold Mining",
      year: "2023",
      description: "Facilitated the acquisition of a mid-tier gold mine in Mpumalanga province, connecting international investors with local mining rights holders.",
      stats: [
        { label: "Investment Value", value: "$42.5 Million" },
        { label: "ROI (36 months)", value: "27.8%", highlight: true },
        { label: "Jobs Created", value: "350+" }
      ]
    },
    {
      title: "Eastern Cape Chrome Export Program",
      category: "Commodity Trading",
      year: "2021",
      description: "Established a sustainable chrome trading program connecting small-scale miners with international buyers, creating consistent revenue streams for local communities.",
      stats: [
        { label: "Annual Volume", value: "120,000 MT" },
        { label: "Price Premium", value: "12.5%", highlight: true },
        { label: "Community Impact", value: "5 Villages" }
      ]
    }
  ];

  const timelineItems = [
    {
      year: "2018",
      title: "Company Founded",
      description: "LLM International established with a focus on chrome trading in the Eastern Cape region."
    },
    {
      year: "2019",
      title: "First Major Contract",
      description: "Secured exclusive mandate to represent a mid-tier gold mine, resulting in successful international investment."
    },
    {
      year: "2021",
      title: "Expansion to Coal Trading",
      description: "Added coal trading services and established logistics partnerships to ensure reliable delivery."
    },
    {
      year: "2022",
      title: "AI Price Intelligence Platform",
      description: "Launched proprietary commodity price forecasting system, improving trading margins by 15%."
    },
    {
      year: "2023",
      title: "International Office Expansion",
      description: "Opened satellite offices in Dubai and Singapore to better serve global clients and investors."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Our <span className="text-gold">Portfolio</span></h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Showcasing our successful projects and the tangible impact we've created for our clients and communities.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <CaseStudy 
              key={index}
              title={study.title}
              category={study.category}
              year={study.year}
              description={study.description}
              stats={study.stats}
              index={index}
            />
          ))}
        </div>
        
        {/* Timeline */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl font-bold mb-8 text-center">Our Growth Timeline</h3>
          
          <div className="relative border-l-2 border-gold pl-10 ml-6">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                isLast={index === timelineItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;