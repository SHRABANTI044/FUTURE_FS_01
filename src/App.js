import React, { useEffect, useState, useCallback, useRef, useLayoutEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ringRef = useRef({ x: 0, y: 0 });

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  useLayoutEffect(() => {
    const ring = document.getElementById('cursor-ring');
    let raf;
    
    const animateRing = () => {
      ringRef.current.x += (cursorPos.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (cursorPos.y - ringRef.current.y) * 0.12;
      if (ring) {
        ring.style.left = `${ringRef.current.x}px`;
        ring.style.top = `${ringRef.current.y}px`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();
    return () => cancelAnimationFrame(raf);
  }, [cursorPos]);

  useLayoutEffect(() => {
    const cursor = document.getElementById('cursor');
    if (cursor) {
      cursor.style.left = `${cursorPos.x}px`;
      cursor.style.top = `${cursorPos.y}px`;
    }
  }, [cursorPos]);

  const toggleHover = useCallback((hover) => {
    setIsHovering(hover);
  }, []);

  return (
    <>
      <div 
        id="cursor" 
        className={isHovering ? 'hovering' : ''}
        onMouseMove={handleMouseMove}
      />
      <div id="cursor-ring" />
      <div className={`app ${isHovering ? 'hovering' : ''}`} onMouseMove={handleMouseMove}>
        <Nav toggleHover={toggleHover} />
        <Hero toggleHover={toggleHover} />
        <Ticker />
        <About />
        <Skills />
        <Projects toggleHover={toggleHover} />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
