import React from 'react';

const skillsData = {
  frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'FastAPI', 'JWT Auth', 'WebSockets', 'Flask'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
  ml_tools: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Data Analysis', 'Machine Learning']
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="reveal">
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>Tech Stack</span>
          </div>
          <h2 className="section-title">Skills &<br /><em>Technologies</em></h2>
        </div>
        <div className="skills-grid reveal-stagger">
          {Object.entries(skillsData).map(([category, tags]) => (
            <div key={category} className="skill-category">
              <div className="skill-category-title">{category === 'ml_tools' ? 'ML & Data Science' : category.charAt(0).toUpperCase() + category.slice(1)}</div>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
