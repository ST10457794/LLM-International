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
      year: "2022",
      title: "Company Founded",
      description: "LLM International established with a vision to become a leading chrome trading company in the North West & Limpopo region."
    },
    {
      year: "2023",
      title: "Strategic Planning & Team Formation",
      description: "Built a core team of industry experts and developed strategic partnerships to prepare for market entry."
    },
    {
      year: "2024",
      title: "Infrastructure & Compliance Setup",
      description: "Secured necessary licenses, developed supply chain and logistics infrastructure & network, and initiated key stakeholder engagements."
    },
    {
      year: "2025",
      title: "Official Launch & Trading Operations",
      description: "LLM International commenced trading operations, executing its first chrome deals and entering the southern African minerals market."
    }
  ];
  
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/*
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Our <span className="text-gold">Portfolio</span></h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Showcasing our successful projects and the tangible impact we've created for our clients and communities.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        */}

        {/*
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
        */}

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
