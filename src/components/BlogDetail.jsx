import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './BlogDetail.css';

function BlogDetail() {
    const { id } = useParams();
    const blog = blogPosts.find(p => p.id === parseInt(id));
    const contentRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = contentRef.current.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [id]);

    if (!blog) {
        return (
            <div className="blog-error">
                <h2>Blog post not found</h2>
                <Link to="/" className="back-btn">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="blog-detail-page" ref={contentRef}>
            <div className="blog-detail-hero">
                <img src={blog.image} alt={blog.title} className="blog-hero-img" />
                <div className="blog-hero-overlay">
                    <div className="blog-hero-content">
                        <span className="blog-detail-category reveal">{blog.category}</span>
                        <h1 className="blog-detail-title reveal">{blog.title}</h1>
                        <span className="blog-detail-date reveal">{blog.date}</span>
                    </div>
                </div>
            </div>

            <div className="blog-detail-container">
                <div className="blog-main-content">
                    <div className="blog-text reveal">
                        {blog.content.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="blog-benefits reveal">
                        <h3>Key Insights & Benefits</h3>
                        <div className="benefits-grid">
                            {blog.benefits.map((benefit, i) => (
                                <div key={i} className="benefit-item">
                                    <span className="benefit-icon">✓</span>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="blog-cta reveal">
                        <div className="cta-bg-animation">
                            <div className="cta-blob blob-1"></div>
                            <div className="cta-blob blob-2"></div>
                            <div className="cta-blob blob-3"></div>
                        </div>
                        <div className="cta-content">
                            <h3>Ready to experience AI-powered healthcare?</h3>
                            <p>Join thousands of others in taking control of their wellness journey with Medico AI.</p>
                            <Link to="/" className="blog-cta-btn">Get Started Now</Link>
                        </div>
                    </div>
                </div>

                <div className="blog-sidebar desktop-only">
                    <div className="sidebar-box reveal">
                        <h3>About the Author</h3>
                        <p>Leading medical AI researchers at Medico AI exploring the future of healthcare.</p>
                    </div>
                    <div className="sidebar-box reveal">
                        <h3>Related Topics</h3>
                        <div className="tag-cloud">
                            <span>#AIHealthcare</span>
                            <span>#Homeopathy</span>
                            <span>#DigitalHealth</span>
                            <span>#FutureMedicine</span>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/" className="floating-back-btn">
                <span>←</span> Back to Home
            </Link>
        </div>
    );
}

export default BlogDetail;
