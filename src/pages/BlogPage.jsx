import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './BlogPage.css';

function BlogPage() {
    const cardsRef = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        cardsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="blog-page">
            <div className="blog-page-header">
                <h1 className="blog-page-title">Latest Medical Insights</h1>
                <p className="blog-page-subtitle">Stay updated with the latest in AI-driven healthcare</p>
            </div>

            <div className="blog-page-content">
                <div className="blogs-grid">
                    {blogPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className="blog-card reveal"
                            ref={el => cardsRef.current[index] = el}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="blog-img-container">
                                <img src={post.image} alt={post.title} className="blog-card-img" />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <Link to={`/blog/${post.id}`} className="blog-link">
                                    Read More <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
