import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-card">
          <img 
            src="/influencer_video_thumbnail_1_1777631601342.png" 
            alt="Influencer Video 1" 
            className="video-img"
          />
          <div className="play-button-overlay">
            <div className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                <path d="M21 7.74098C25 10.0504 25 15.8239 21 18.1333L9 25.0615C5 27.3709 -1.37896e-06 24.4841 -1.17707e-06 19.8653L-5.71387e-07 6.00894C-3.69492e-07 1.39013 5 -1.49663 9 0.812776L21 7.74098Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div className="video-card">
          <img 
            src="/influencer_video_thumbnail_2_1777631615607.png" 
            alt="Influencer Video 2" 
            className="video-img"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
