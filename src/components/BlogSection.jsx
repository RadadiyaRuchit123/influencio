import React from 'react';
import './BlogSection.css';
import AnimatedHeading from './AnimatedHeading.jsx';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      image: blog1,
      date: '13 Feb, 2026',
      title: 'The Anatomy of a High-Converting Influencer Portfolio'
    },
    {
      id: 2,
      image: blog2,
      date: '14 Feb, 2026',
      title: 'The Ultimate SEO Checklist for Influencer Portfolios in 2026'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-badge bg-transparent">
            <span className="dot"></span>
            News & Blog
          </div>
          <AnimatedHeading 
            text="Insights & Creative Stories" 
            className="blog-title font-extrabold text-[74px] leading-[82px] tracking-[-0.04em] text-[#1a1a1a] flex flex-wrap justify-start gap-x-[0.3em]"
          />
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <div key={post.id} className="blog-card gap-3.5">
              <div className="blog-image-wrapper rounded-[10px] w-full aspect-16/10 overflow-hidden relative ">
                <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
              </div>
              <div className="blog-date text-lg color-[#000]">{post.date}</div>
              <h3 className="blog-card-title">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
