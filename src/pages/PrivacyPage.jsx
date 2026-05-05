import React from 'react';
import './PrivacyPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeading from '../components/AnimatedHeading';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <Navbar />

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-container">
          <AnimatedHeading
            text="PRIVACY POLICY"
            className="font-extrabold text-[74px] leading-[130px] tracking-[-0.04em] text-white text-center"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content-section">
        <div className="privacy-container">
          <div className="privacy-header">
            <div className="legal-badge">
              <span className="dot"></span>
              Legal
            </div>
            <h2 className="privacy-main-title">Privacy Policy</h2>
            <p className="privacy-intro">
              At Floyd Miles, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or interact with our content.
            </p>
          </div>

          <div className="privacy-body">
            <div className="privacy-section">
              <h3>1. Information We Collect</h3>
              <p>
                We may collect basic personal information such as your name, email address, and any details you provide through contact forms, newsletter sign-ups, or collaboration inquiries. We may also collect non-personal data such as browser type, device information, and website usage statistics.
              </p>
            </div>

            <div className="privacy-section">
              <h3>2. How We Use Information</h3>
              <p>
                The information we collect is used to:
              </p>
              <ul>
                <li>Respond to inquiries and messages</li>
                <li>Send newsletters or updates (if you subscribe)</li>
                <li>Improve website performance and user experience</li>
                <li>Communicate about brand collaborations or partnerships</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>3. Cookies</h3>
              <p>
                Our website may use cookies to enhance your browsing experience and analyze website traffic. You can disable cookies in your browser settings at any time.
              </p>
            </div>

            <div className="privacy-section">
              <h3>4. Third-Party Links</h3>
              <p>
                This website may contain links to third-party websites or affiliate links. We are not responsible for the privacy practices of those external websites.
              </p>
            </div>

            <div className="privacy-section">
              <h3>5. Data Protection</h3>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.
              </p>
            </div>

            <div className="privacy-section">
              <h3>6. Your Rights</h3>
              <p>
                You may request access, correction, or deletion of your personal information at any time by contacting us.
              </p>
            </div>

            <div className="privacy-section">
              <h3>7. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="contact-email">
                Email: <span>📩 floydmiles@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
