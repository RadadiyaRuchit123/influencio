import React, { useEffect, useRef, useState } from 'react';

const AnimatedHeading = ({ text, className, tag: Tag = 'h2' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const words = text.split(" ");

  return (
    <Tag 
      ref={headingRef} 
      className={`${className} flex flex-wrap gap-x-[0.3em] tracking-[-0.04em]`}
    >
      {words.map((word, index) => (
        <span 
          key={index} 
          className={`animated-word ${isVisible ? 'animate' : ''}`}
          style={{ '--index': index }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedHeading;
