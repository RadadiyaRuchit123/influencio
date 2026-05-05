import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeading from '../components/AnimatedHeading';

const NotFoundPage = () => {
  return (
    <div className="not-found-page bg-(--bg)">
      <Navbar />

      {/* Hero Section */}
      <section className="not-found-hero">
        <div className="not-found-hero-container">
          <AnimatedHeading
            text="NOT FOUND"
            className="font-extrabold text-[74px] leading-[130px] tracking-[-0.04em] text-white text-center"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="not-found-content-section">
        <div className="not-found-container">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Oops! Page Not Found</h2>
          <p className="error-description">
            It looks like the link is broken or the page has been removed. <br />
            Don't worry — let's get you back on track.
          </p>
          <Link to="/" className="back-home-btn">
            <span className="dot"></span>
            Back to Homepage
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
