import React from 'react';
import './ContactPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeading from '../components/AnimatedHeading';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Navbar />

            {/* Red Hero Section */}
            <section className="about-hero-red min-h-[284px] bg-[url('/about_hero.png')] pb-[20px] bg-cover bg-no-repeat bg-center flex items-end px-[20px] py-[80px] relative">
                <div className="about-hero-container">
                    <AnimatedHeading
                        text="CONTACT US"
                        className="font-extrabold text-[74px] leading-[130px] tracking-[-0.04em] text-white text-left"
                    />
                </div>
            </section>

            {/* Main Contact Content */}
            <section className="contact-content-section py-[120px] px-[20px]">
                <div className="contact-container max-w-[1140px] m-auto grid grid-cols-2 gap-[100px]">

                    {/* Left Column: Info */}
                    <div className="contact-info-col">
                        <AnimatedHeading
                            text="Let's Chat"
                            className="text-[60px] font-bold leading-[1.1] mb-12 text-[#1a1a1a]"
                        />
                        <div className="contact-methods">
                            <div className="contact-method">
                                <span className="method-icon email-icon"></span>
                                <p>floydmiles@gmail.com</p>
                            </div>
                            <div className="contact-method">
                                <span className="method-icon phone-icon"></span>
                                <p>+(1) 1203 548697</p>
                            </div>
                            <div className="contact-method">
                                <span className="method-icon address-icon"></span>
                                <p>3020 Westheimer Rd. Santa Ana,<br />USA 47541</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-form-col">
                        <form className="minimal-contact-form">
                            <div className="form-group">
                                <label>Full Name*</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Your Email*</label>
                                <input type="email" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Phone*</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Write Your Message*</label>
                                <textarea rows="4"></textarea>
                            </div>
                            <button type="submit" className="form-submit-btn">
                                <span className="btn-dot"></span>
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
