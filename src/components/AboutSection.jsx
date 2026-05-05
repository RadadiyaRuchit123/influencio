import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';
import AnimatedHeading from './AnimatedHeading.jsx';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className={`about-content ${isVisible ? 'animate' : ''}`}>
        <div className="about-left">
          <div className="about-badge bg-[#fff4f4] max-w-fit">
            <span className="dot"></span>
            About Me
          </div>
        </div>
        <div className="about-right">

          <p className="about-text">
            I am an beauty and lifestyle influencer passionate about helping people look good, feel confident, and live beautifully. With a strong eye for trends and an honest approach to self-care, Floyd shares everyday beauty routines, skincare tips, fashion inspiration, and lifestyle insights that feel real and relatable.
          </p>
          <Link to="/about" className="discover-btn" style={{ textDecoration: 'none' }}>
            <span className="dot"></span>
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
