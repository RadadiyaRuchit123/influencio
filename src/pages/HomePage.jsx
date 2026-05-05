import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SocialSection from '../components/SocialSection';
import AboutSection from '../components/AboutSection';
import VideoSection from '../components/VideoSection';
import FeaturedSection from '../components/FeaturedSection';
import StackingSection from '../components/StackingSection';
import TestimonialSection from '../components/TestimonialSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <SocialSection />
      <AboutSection />
      <VideoSection />
      <FeaturedSection />
      <StackingSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomePage;
