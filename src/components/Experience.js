import React from 'react';

const experiences = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'Future Interns',
    desc: 'Working as a Full Stack Web Development Intern at Future Interns, contributing to the development and enhancement of web applications. Involved in building responsive interfaces and backend systems using modern technologies.',
    period: 'Mar 2026 – Present'
  },
  {
    role: 'Web Development Intern',
    company: 'Oasis Infobyte',
    desc: 'Improved problem-solving, debugging, and collaboration skills in a remote work environment. Gained hands-on experience with Bootstrap Framework, MongoDB, and various web development technologies.',
    period: 'Mar 2026 – Present'
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="exp-inner">
        <div className="reveal">
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>Experience</span>
          </div>
          <h2 className="section-title">My<br /><em>Experience</em></h2>
          <p style={{marginTop:'24px', color:'var(--text-dim)', fontSize:'0.9rem', lineHeight:'1.9', maxWidth:'280px'}}>
            Real internship experiences that have shaped my skills and understanding of professional web development.
          </p>
        </div>

        <div className="exp-list reveal-stagger">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <p className="exp-desc">{exp.desc}</p>
              </div>
              <div className="exp-period">{exp.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
