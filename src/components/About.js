import React from 'react';

const About = () => {
  return (
    <section>
      <div id="about" className="reveal">
        <div className="about-text">
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>About Me</span>
          </div>
          <h2 className="section-title">I am<br /><em>Shrabanti Saha</em></h2>
          <p>
            I'm a second-year student passionate about building responsive web applications that provide seamless user experiences. 
            I believe great software should be both functional and beautiful, accessible to everyone.
          </p>
          <p>
            Currently exploring <span className="highlight">Machine Learning</span> and continuously learning new technologies to create smarter solutions. 
            I'm actively <span className="highlight">upgrading my skills</span> through hands-on projects and staying updated with the latest industry trends.
          </p>
          <p>
            When I'm not studying or coding, you'll find me experimenting with new frameworks, contributing to open source projects, 
            or learning about emerging technologies that can solve real-world problems.
          </p>
          <div style={{marginTop:'32px', display:'flex', gap:'12px', flexWrap:'wrap'}}>
            <a href="#contact" className="btn-primary">
              Let's Talk
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
            <a href="/resume/Shrabanti_Saha_Resume.pdf" className="btn-outline" download="Shrabanti_Saha_Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>

        <div className="about-stats reveal-stagger">
          <div className="stat-card">
            <div className="stat-num">2nd</div>
            <div className="stat-label">Year Student</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">10+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">15+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">∞</div>
            <div className="stat-label">Learning Journey</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
