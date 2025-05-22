import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLast = false }) => {
  return (
    <div className={`${isLast ? '' : 'mb-12'} relative timeline-item`}>
      <h4 className="font-serif text-xl font-bold mb-2">{year}: {title}</h4>
      <p className="text-charcoal-light">
        {description}
      </p>
    </div>
  );
};

export default TimelineItem;