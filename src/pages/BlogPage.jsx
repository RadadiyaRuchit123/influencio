import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeading from '../components/AnimatedHeading';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
    return (
        <div className="blog-page">
            <Navbar />
            
            {/* Hero Section */}
            <section className="about-hero-red min-h-[284px] bg-[url('/about_hero.png')] pb-[20px] bg-cover bg-no-repeat bg-center flex items-end px-[20px] py-[80px] relative">
                <div className="about-hero-container">
                    <AnimatedHeading
                        text="NEWS & BLOG"
                        className="font-extrabold text-[74px] leading-[130px] tracking-[-0.04em] text-white text-left"
                    />
                </div>
            </section>

            {/* Main Blog Content */}
            <section className="blog-content-section bg-white py-[120px] px-[20px]">
                <div className="blog-container max-w-[1140px] m-auto">
                    <div className="blog-header-minimal mb-20 max-w-[50%] m-auto text-6xl font-bold leading-[1.1]">
                        <div className="about-badge mb-6 mx-auto max-w-fit border border-[rgba(0,0,0,0.1)]">
                            <span className="dot"></span>
                            News & Blog
                        </div>
                        <AnimatedHeading
                            text="Insights & Creative Stories"
                            className=" text-[60px] leading-[82px] !font-bold tracking-[-0.04em] text-center flex flex-wrap justify-center gap-x-[0.3em]"
                        />
                    </div>

                    <div className="blog-grid-2">
                        {blogPosts.map(post => (
                            <Link to={`/blog/${post.id}`} key={post.id} className="blog-item-minimal" style={{ textDecoration: 'none' }}>
                                <div className="blog-img-wrapper">
                                    <img src={post.img} alt={post.title} loading="lazy" decoding="async" />
                                    <div className="blog-arrow-overlay">
                                        <div className="arrow-circle">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-info py-8">
                                    <span className="blog-date-text text-[#888] font-medium text-[16px] mb-3 block">{post.date}</span>
                                    <h3 className="blog-title-text text-[28px] font-semibold leading-[1.3] text-[#1a1a1a]">{post.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;