import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetailPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeading from '../components/AnimatedHeading';
import { blogPosts } from '../data/blogData';

const BlogDetailPage = () => {
  const { id } = useParams();

  // Look up the post based on the ID from the URL
  const post = blogPosts.find((p) => p.id === id);

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-detail-page text-center py-40">
        <Navbar />
        <h1>Post Not Found</h1>
        <Link to="/blog" className="text-blue-500 underline mt-4 block">Back to Blog</Link>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
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

      <div className="blog-detail-container">
        {/* Header Section */}
        <header className="blog-detail-header">
          <div className="about-badge mb-6 mx-auto max-w-fit border border-[rgba(0,0,0,0.1)]">
            <span className="dot"></span>
            {post.date}
          </div>
          <AnimatedHeading
            text={post.title}
            className="blog-detail-title  text-[60px] leading-[82px] !font-bold tracking-[-0.04em] text-center justify-center  flex flex-wrap gap-x-[0.3em] "
            tag="h1"
          />
          <p className="blog-detail-intro">
            {post.intro}
          </p>
        </header>

        {/* Hero Image */}
        <div className="blog-detail-hero">
          <img src={post.img} alt={post.title} className="rounded-[20px] w-full aspect-19/10 object-cover" loading="lazy" decoding="async" />
        </div>

        {/* Article Body */}
        <article className="blog-detail-content">
          {post.sections.map((section) => (
            <div key={section.id} className="blog-content-section">
              <h2 className="section-title">
                {section.id}. {section.title}
              </h2>
              <p className="section-text">
                {section.content}
              </p>
            </div>
          ))}
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
