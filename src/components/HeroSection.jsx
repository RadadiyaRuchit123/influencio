import React from 'react';
import AnimatedHeading from './AnimatedHeading';

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-content">
                <AnimatedHeading
                    tag="h1"
                    text="I'm Floyd Miles, a beauty and lifestyle influencer"
                    className="font-extrabold text-[74px] leading-[82px] tracking-[-0.04em] text-white text-center flex flex-wrap justify-center gap-x-[0.3em]"
                />
                <p className="hero-description font-semibold text-[18px] leading-[28px] text-center text-white">
                    I am an beauty and lifestyle influencer passionate about helping people look good, feel confident, and live beautifully. With a strong eye for trends and an honest approach to self-care, Floyd shares everyday beauty routines, skincare tips, fashion inspiration, and lifestyle insights that feel real and relatable.
                </p>
                <button className="hero-btn animate-in">
                    <span className="dot"></span>
                    Follow Me
                </button>
            </div>
        </section>
    );
}