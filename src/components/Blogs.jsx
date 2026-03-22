import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './Blogs.css';

function Blogs() {
    const cardsRef = useRef([]);

    useEffect(() => {
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
        <section className="blogs" id="blogs">
            <div className="section-header">
                <h2 className="section-title">Latest Medical Insights</h2>
                <p className="section-subtitle">Stay updated with the latest in AI-driven healthcare</p>
            </div>

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

            <div className="blogs-view-all">
                <Link to="/blogs" className="view-all-btn">
                    View All Insights <span>→</span>
                </Link>
            </div>
        </section>
    );
}

export default Blogs;
