import React from 'react';

const techStack = [
  'React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 
  'GraphQL', 'Docker', 'AWS', 'Git / GitHub', 'Tailwind CSS', 
  'MongoDB', 'Next.js'
];

const Ticker = () => {
  // Duplicate array for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <div className="ticker-section">
      <div className="ticker-track" id="ticker">
        {items.map((tech, index) => (
          <div key={`${tech}-${index}`} className="ticker-item">
            <span className="ticker-dot"></span>{tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
