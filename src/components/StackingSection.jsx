import React from 'react';
import './StackingSection.css';
import './StackingSection.css';
import AnimatedHeading from './AnimatedHeading.jsx';

const StackingSection = () => {
  const cards = [
    {
      id: 1,
      title: '5-Minute Soft Glam Look',
      desc: "Quick soft glam makeup you can do when you're running late but still want to look polished. Easy steps, beginner-friendly, zero stress.",
      img: '/collab_img_1_1777638098157.png'
    },
    {
      id: 2,
      title: 'Clean Girl Hair Care Secrets',
      desc: 'My real hair care routine for healthy, shiny hair. Tips, treatments, and mistakes I stopped making that changed everything.',
      img: '/collab_img_2_1777638117705.png'
    },
    {
      id: 3,
      title: 'Beauty Products Worth the Hype',
      desc: "Honest review of trending beauty products. What's actually worth buying and what you can skip. Wind down with me — skincare and tea.",
      img: '/collab_img_3_1777638138024.png'
    }
  ];

  return (
    <section className="stacking-section w-full px-[20px] py-[60px] flex justify-center bg-[#fff4f4] ">
      <div className="stacking-container">
        <div className="stacking-sidebar">
          <div className="stacking-badge">
            <span className="dot"></span>
            Collaborate
          </div>
          <AnimatedHeading
            text="The Smart Way To Collaborate"
            className="stacking-main-title font-extrabold text-[74px] leading-[82px] tracking-[-0.04em] text-[#1a1a1a] flex flex-wrap justify-start gap-x-[0.3em] max-w-full lg:max-w-4/5 "
          />
        </div>

        <div className="stacking-cards max-w-full lg:max-w-3/4 ml-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="stacking-card"
              style={{ top: '100px' }}
            >
              <div className="card-inner bg-[#fff4f4] gap-[15px] pb-[20px]">
                <div className="card-image-side rounded-[10px]">
                  <img src={card.img} alt={card.title} />
                  <div className="card-play-btn">
                    <svg viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="card-text-side bg-white rounded-[10px] justify-between">
                  <div className="card-title-area">
                    <h3 className='leading-[34px]'>{card.title}</h3>
                    <div className="divider"></div>
                  </div>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackingSection;
