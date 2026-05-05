import React from 'react';
import './AboutPage.css';
import AnimatedHeading from '../components/AnimatedHeading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialSection from '../components/SocialSection';

const AboutPage = () => {
  const videos = [
    { id: 1, img: "/influencer_video_thumbnail_1_1777631601342.png", title: "Morning Routine" },
    { id: 2, img: "/featured_content_img.png", title: "Fashion Week Recap" },
    { id: 3, img: "/influencer_video_thumbnail_2_1777631615607.png", title: "Skincare Secrets" },
    { id: 4, img: "/collab_img_1_1777638098157.png", title: "Behind the Scenes" },
    { id: 5, img: "/collab_img_2_1777638117705.png", title: "Q&A Session" },
    { id: 6, img: "/collab_img_3_1777638138024.png", title: "Style Tips" }
  ];

  // Double the videos for seamless infinite scroll
  const displayVideos = [...videos, ...videos];

  return (
    <div className="about-page">
      <Navbar />

      <section className="about-hero-red min-h-[284px] bg-[url('/about_hero.png')] pb-[20px] bg-cover bg-no-repeat bg-center flex items-end px-[20px] py-[80px] relative">
        <div className="about-hero-container">
          <AnimatedHeading
            text="ABOUT ME"
            className="font-extrabold text-[74px] leading-[130px] tracking-[-0.04em] text-white text-left"
          />
        </div>
      </section>

      <section className="about-bio-section bg-[#fff4f4] py-[120px] px-[20px] max-w-[1140px] m-auto">
        <div className="bio-container grid grid-cols-[0.3fr_0.7fr] gap-[40px]">
          <div className="bio-left">
            <div className="about-badge bg-transparent max-w-fit border border-[rgba(0,0,0,0.1)]">
              <span className="dot"></span>
              About Us
            </div>
          </div>
          <div className="bio-right">
            <p className="bio-intro">
              Hi, I'm Floyd Miles — a beauty and lifestyle influencer passionate about helping you look good, feel confident, and live beautifully every single day.
            </p>
            <p className="bio-body">
              My journey started with a simple love for skincare, fashion, and self-expression. What began as sharing honest reviews and personal routines quickly grew into a thriving community of beauty lovers and lifestyle enthusiasts who value authenticity and real results.
            </p>
          </div>
        </div>
      </section>

      <section className="about-video-main">
        <div className="video-hero-wrapper">
          <img src="/about_hero.png" alt="Main Feature" className="video-hero-thumb" />
          <div className="play-overlay-large">
            <div className="play-circle">
              <svg width="40" height="46" viewBox="0 0 40 46" fill="none">
                <path d="M37 19.5359C40.3333 21.4604 40.3333 26.2729 37 28.1974L7.75 45.085C4.41666 47.0095 -1.18204e-06 44.6032 -1.01379e-06 40.7543L4.62933e-07 6.97902C6.31179e-07 3.13013 4.41667 0.723877 7.75 2.64838L37 19.5359Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <SocialSection />

      {/* Full-Width Auto-Scrolling Video Section */}
      <section className="about-videos-marquee-section pb-[120px] relative w-full overflow-hidden bg-[#fff4f4]">
        <div className="videos-marquee-header mb-16 max-w-[40%] m-auto">
          <div className="about-badge mb-4 mx-auto max-w-fit">
            <span className="dot"></span>
            Videos
          </div>
          <AnimatedHeading
            text="My Latest Premium Videos 2026"
            className="font-extrabold text-[74px] leading-[82px] text-center justify-center"
          />
        </div>

        <div className="about-video-marquee-container">
          <div className="about-video-marquee-track">
            {displayVideos.map((video, index) => (
              <div key={index} className="marquee-video-slide">
                <div className="about-video-card">
                  <img src={video.img} alt={video.title} />
                  <div className="play-mini">
                    <svg width="24" height="28" viewBox="0 0 40 46" fill="none">
                      <path d="M37 19.5359C40.3333 21.4604 40.3333 26.2729 37 28.1974L7.75 45.085C4.41666 47.0095 -1.18204e-06 44.6032 -1.01379e-06 40.7543L4.62933e-07 6.97902C6.31179e-07 3.13013 4.41667 0.723877 7.75 2.64838L37 19.5359Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
