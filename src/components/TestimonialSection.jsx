import React from 'react';
import './TestimonialSection.css';
import AnimatedHeading from './AnimatedHeading.jsx';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Tania Rosario',
      role: 'Lifestyle Content Creator',
      avatar: '/avatar_1_1777641723088.png',
      quote: "Floyd's skincare recommendations completely changed my routine. My skin has never looked better."
    },
    {
      id: 2,
      name: 'Sarah Jenny',
      role: 'Lifestyle Content Creator',
      avatar: '/avatar_2_1777641740170.png',
      quote: "I trust every review because it's honest. You can tell Floyd genuinely cares about the audience."
    },
    {
      id: 3,
      name: 'Jemmy Wilson',
      role: 'Lifestyle Content Creator',
      avatar: '/avatar_3_1777641760257.png',
      quote: "Floyd makes beauty feel simple and approachable. I finally understand what works for my skin."
    },
    {
      id: 4,
      name: 'Elena Grace',
      role: 'Beauty Influencer',
      avatar: '/avatar_4_1777642289729.png',
      quote: "The aesthetic and the content are just top-notch. I've learned so much about consistent branding."
    },
    {
      id: 5,
      name: 'Marcus Chen',
      role: 'Digital Strategist',
      avatar: '/avatar_5_1777642306009.png',
      quote: "Rare to find someone so authentic in this space. Floyd's insights are actually actionable."
    },
    {
      id: 6,
      name: 'Lily Bloom',
      role: 'Vlogger',
      avatar: '/avatar_6_1777642325003.png',
      quote: "Every video is a masterpiece. The tips on lighting and setup changed my production game!"
    }
  ];

  // Double the testimonials for seamless infinite scroll
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div className="testimonial-badge">
          <span className="dot"></span>
          Testimonial
        </div>
        <AnimatedHeading 
          text="What Does Our Subscriber Say" 
          className="testimonial-title font-extrabold text-[74px] leading-[82px] tracking-[-0.04em] text-[#1a1a1a] text-center flex flex-wrap justify-center gap-x-[0.3em]"
        />
      </div>

      <div className="testimonial-carousel-container">
        <div className="testimonial-track">
          {displayTestimonials.map((item, index) => (
            <div key={`${item.id}-${index}`} className="testimonial-card">
              <div className="stars">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="star">{star}</span>
                ))}
              </div>
              <p className="quote text-[20px] font-semibold ">"{item.quote}"</p>
              <div className="user-info">
                <img src={item.avatar} alt={item.name} className="avatar" />
                <div className="user-details">
                  <div className="name">{item.name}</div>
                  <div className="role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
