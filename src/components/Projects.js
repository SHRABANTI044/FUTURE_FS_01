import React from 'react';

const projects = [
  {
    id: 1,
    featured: true,
    className: 'p1',
    label: 'Full Stack + ML',
    year: '2026',
    name: 'Emotion-Aware Study Assistant',
    desc: 'An AI-based learning system that detects student emotions using webcam and adapts learning content accordingly. Features real-time emotion detection, adaptive content delivery, interactive quizzes, and personalized analytics dashboard.',
    tech: ['React', 'Node.js', 'Python', 'OpenCV', 'TensorFlow', 'MongoDB'],
    links: [{ label: 'Source', icon: 'github' }]
  },
  {
    id: 2,
    featured: true,
    className: 'p2',
    label: 'AI/ML + Full Stack',
    year: '2026',
    name: 'TruthGuard AI — News Verification',
    desc: 'AI-powered truth verification system using TF-IDF vectorization and Logistic Regression to verify news authenticity. Features real-time analysis, explainable AI, and 75-85% accuracy in detecting misinformation.',
    tech: ['React', 'Node.js', 'Python', 'scikit-learn', 'FastAPI', 'SQLite'],
    links: [{ label: 'Source', icon: 'github' }]
  }
];

const Projects = ({ toggleHover }) => {
  return (
    <section>
      <div id="projects">
        <div className="projects-header reveal">
          <div>
            <div className="section-label">
              <span className="section-label-line"></span>
              <span>Work</span>
            </div>
            <h2 className="section-title">Selected<br /><em>Projects</em></h2>
          </div>
          <a href="https://github.com/SHRABANTI044" className="view-all-link" target="_blank" rel="noopener">
            All on GitHub
            <svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </a>
        </div>

        <div className="projects-showcase reveal-stagger">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-showcase-card ${index === 0 ? 'primary' : 'secondary'}`}>
              <div className="project-card-header">
                <div className="project-status">
                  <div className="status-dot"></div>
                  <span className="status-text">Active Project</span>
                </div>
                <div className="project-year-badge">{project.year}</div>
              </div>

              <div className="project-visual">
                <div className="project-code-preview">
                  <div className="code-line">
                    <span className="code-comment">// {project.id === 1 ? 'Emotion Detection AI' : 'News Verification ML'}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span> <span className="code-variable">{project.id === 1 ? 'emotionAI' : 'truthGuard'}</span> = <span className="code-bracket">{'{'}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">status</span>: <span className="code-string">"active"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">tech</span>: <span className="code-bracket">[</span><span className="code-string">"{project.tech[0]}"</span>, <span className="code-string">"{project.tech[2]}"</span><span className="code-bracket">]</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">{'}'}</span>
                  </div>
                  <div className="code-cursor"></div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-label">{project.label}</div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.desc}</p>
                
                <div className="project-tech-stack">
                  <div className="tech-stack-label">Tech Stack</div>
                  <div className="tech-stack-items">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a 
                    href={
                      project.id === 1 ? "https://github.com/SHRABANTI044/Emotion-Aware-Study-Assistant" :
                      project.id === 2 ? "https://github.com/SHRABANTI044/TruthGuard-AI" :
                      "#"
                    } 
                    className="project-action-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => toggleHover(true)}
                    onMouseLeave={() => toggleHover(false)}
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
