import React from 'react';
import './SocialSection.css';
import AnimatedHeading from './AnimatedHeading.jsx';

const SocialSection = () => {
    const stats = [
        {
            platform: 'Facebook',
            followers: '40.5k followers',
            icon: (
                <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#1877F2" />
                    <path d="M26 20H22.5V31H18V20H15.5V16.5H18V14.25C18 11.25 19.5 9.5 22.5 9.5C23.75 9.5 25.25 9.75 25.25 9.75V12.75H23.75C22.25 12.75 21.75 13.5 21.75 14.5V16.5H25.25L24.75 20H26Z" fill="white" />
                </svg>
            )
        },
        {
            platform: 'Instagram',
            followers: '30.5k followers',
            icon: (
                <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="insta_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.5 31.5) rotate(-45) scale(35)">
                            <stop offset="0" stopColor="#FED011" />
                            <stop offset="0.25" stopColor="#F77737" />
                            <stop offset="0.5" stopColor="#E1306C" />
                            <stop offset="1" stopColor="#833AB4" />
                        </radialGradient>
                    </defs>
                    <rect width="40" height="40" rx="20" fill="url(#insta_grad)" />
                    <path d="M20 14.5C16.9624 14.5 14.5 16.9624 14.5 20C14.5 23.0376 16.9624 25.5 20 25.5C23.0376 25.5 25.5 23.0376 25.5 20C25.5 16.9624 23.0376 14.5 20 14.5ZM20 23.5C18.067 23.5 16.5 21.933 16.5 20C16.5 18.067 18.067 16.5 20 16.5C21.933 16.5 23.5 18.067 23.5 20C23.5 21.933 21.933 23.5 20 23.5Z" fill="white" />
                    <path d="M27.2 14.05C27.2 14.7127 26.6627 15.25 26 15.25C25.3373 15.25 24.8 14.7127 24.8 14.05C24.8 13.3873 25.3373 12.85 26 12.85C26.6627 12.85 27.2 13.3873 27.2 14.05Z" fill="white" />
                    <rect x="10" y="10" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
                </svg>
            )
        },
        {
            platform: 'Tiktok',
            followers: '40.5k followers',
            icon: (
                <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="black" />
                    <path d="M25.5 14.5C23.5 14.5 22.5 13.5 22.5 11.5V11H19.5V23C19.5 24.5 18.5 25.5 17 25.5C15.5 25.5 14.5 24.5 14.5 23C14.5 21.5 15.5 20.5 17 20.5V17.5C14 17.5 11.5 20 11.5 23C11.5 26 14 28.5 17 28.5C20 28.5 22.5 26 22.5 23V16.5C23.5 17.5 25.5 18 27 18V15C26.5 15 26 14.8 25.5 14.5Z" fill="white" />
                </svg>
            )
        },
        {
            platform: 'Youtube',
            followers: '50.5k followers',
            icon: (
                <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#FF0000" />
                    <path d="M27.5 16.5C27.5 14.5 26.5 13.5 24.5 13.5H15.5C13.5 13.5 12.5 14.5 12.5 16.5V23.5C12.5 25.5 13.5 26.5 15.5 26.5H24.5C26.5 26.5 27.5 25.5 27.5 23.5V16.5ZM18.5 22.5V17.5L23.5 20L18.5 22.5Z" fill="white" />
                </svg>
            )
        }
    ];

    // Double the stats to create a seamless loop
    const displayStats = [...stats, ...stats, ...stats];

    return (
        <section className="social-stats-container bg-[#fff4f4] w-full py-[120px] px-[20px] flex items-center justify-center border-t border-[rgba(0,0,0,0.02)]">
            <div className="social-stats-content">
                <div className="social-stats-header">
                    <AnimatedHeading
                        text="Social Statistics:"
                        className="font-extrabold text-[74px] leading-[82px] tracking-[-0.04em] text-[#1a1a1a] flex flex-wrap justify-start gap-x-[0.3em]"
                    />
                </div>

                <div className="social-cards-wrapper">
                    <div className="social-marquee-container">
                        <div className="social-cards-track">
                            {displayStats.map((stat, index) => (
                                <div key={index} className="social-card">
                                    <div className="social-card-icon">
                                        {stat.icon}
                                    </div>
                                    <div className="social-card-info">
                                        <h3>{stat.platform}</h3>
                                        <p>{stat.followers}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
