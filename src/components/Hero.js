import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ toggleHover }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef(null);

  const codeLines = [
    '> Initializing Developer Profile...',
    '> Loading skills: React, Node.js, Python',
    '> Compiling ML models: TensorFlow, OpenCV',
    '> Building responsive interfaces...',
    '> Connecting to databases: MongoDB, PostgreSQL',
    '> Status: Ready for Innovation! ✨',
    '> Available for: Internships & Projects',
    '> Type "hire_me()" to get started 🚀'
  ];

  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      if (currentChar < codeLines[currentLine]?.length) {
        setCurrentChar(prev => prev + 1);
      } else if (currentLine < codeLines.length - 1) {
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 800);
      } else {
        setTimeout(() => {
          setCurrentLine(0);
          setCurrentChar(0);
        }, 3000);
      }
    }, Math.random() * 50 + 30);

    return () => clearTimeout(timer);
  }, [currentChar, currentLine, isTyping, codeLines]);

  return (
    <section id="hero" className="reveal">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line"></span>
          <span>Full Stack Developer</span>
        </div>
        <h1 className="hero-name">
          Building<br />
          <em>Responsive</em><br />
          Web Apps
        </h1>
        <p className="hero-subtitle">
          I'm passionate about creating responsive web applications and exploring Machine Learning to build smarter, more impactful solutions that make a difference.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary" onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)}>
            View My Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-terminal-container">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <div className="terminal-title">shrabanti@dev-machine</div>
          </div>
          
          <div className="terminal-body" ref={terminalRef}>
            {codeLines.map((line, index) => (
              <div key={index} className={`terminal-line ${index <= currentLine ? 'visible' : ''}`}>
                <span className="terminal-prompt">$</span>
                <span className="terminal-text">
                  {index === currentLine 
                    ? line.substring(0, currentChar)
                    : index < currentLine 
                      ? line 
                      : ''
                  }
                  {index === currentLine && (
                    <span className="terminal-cursor">|</span>
                  )}
                </span>
              </div>
            ))}
            
            <div className="terminal-stats">
              <div className="stat-item">
                <span className="stat-label">Skills:</span>
                <div className="skill-bars">
                  <div className="skill-bar">
                    <span>React</span>
                    <div className="bar"><div className="fill" style={{width: '90%'}}></div></div>
                  </div>
                  <div className="skill-bar">
                    <span>Python</span>
                    <div className="bar"><div className="fill" style={{width: '85%'}}></div></div>
                  </div>
                  <div className="skill-bar">
                    <span>ML</span>
                    <div className="bar"><div className="fill" style={{width: '75%'}}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
