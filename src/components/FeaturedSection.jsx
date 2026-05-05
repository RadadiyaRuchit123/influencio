import React, { useEffect, useRef, useState } from 'react';
import './FeaturedSection.css';
import AnimatedHeading from './AnimatedHeading.jsx';

const FeaturedSection = () => {
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
      { threshold: 0.1 }
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

  const items = [
    {
      id: '01',
      title: 'Beauty Routines',
      desc: 'Daily skincare, makeup tutorials, and product breakdowns designed for real people and real results.'
    },
    {
      id: '02',
      title: 'Lifestyle & Wellness',
      desc: 'Habits, productivity tips, and wellness practices that support a balanced, modern lifestyle.'
    },
    {
      id: '03',
      title: 'Honest Reviews',
      desc: 'No hype, no filters — only genuine opinions about products I actually use.'
    },
    {
      id: '04',
      title: 'Fashion & Style',
      desc: 'Effortless looks, wardrobe staples, and styling inspiration for everyday confidence.'
    }
  ];

  return (
    <section className="featured-section width-[100%] flex flex-col items-center px-[20px] py-[60px] bg-[#fff4f4]" ref={sectionRef}>
      <div className="featured-header pb-[60px] text-center flex flex-col justify-center items-center max-w-full  md:max-w-[70%] lg:max-w-[30%]">
        <div className="featured-badge px-[12px] py-[4px] border border-[rgba(0,0,0,0.3)] gap-[10px] rounded-[100px] inline-flex items-center font-size-[14px] font-weight-[600] text-[#1a1a1a] margin-bottom-[24px] max-w-fit">
          <span className="dot bg-[#000] w-[5px] h-[5px] rounded-[50%]"></span>
          Glow and Glamour
        </div>
        <AnimatedHeading
          text="Glow With Confidence Live with Style."
          className="featured-title mt-[20px] font-extrabold text-[74px] leading-[82px] tracking-[-0.04em] text-[#1a1a1a] text-center flex flex-wrap justify-center gap-x-[0.3em]"
        />
      </div>

      <div className="featured-content">
        <div className="featured-left">
          <div className="featured-image-wrapper">
            <img
              src="/featured_content_img.png"
              alt="Featured Influence"
              className="featured-img"
            />
          </div>
        </div>
        <div className={`featured-right ${isVisible ? 'animate-slide-left' : ''}`}>
          {items.map((item) => (
            <div key={item.id} className="featured-item">
              <div className="item-id">{item.id}</div>
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
