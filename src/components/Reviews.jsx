import React, { useEffect, useRef } from 'react';
import './Reviews.css';

const reviews = [
    {
        name: 'Agna Patel',
        role: 'Doctor',
        content: 'The AI analysis provided by Medico AI was surprisingly accurate. It helped me understand my symptoms better and suggested a holistic approach that really worked for me.',
        rating: 5
    },
    {
        name: 'Rajesh Kumar',
        role: 'Doctor',
        content: 'I was skeptical about AI in healthcare, but Medico AI changed my mind. The integration of allopathic and homeopathic suggestions is brilliant.',
        rating: 5
    },
    {
        name: 'Sarah Johnson',
        role: 'Doctor',
        content: 'A very user-friendly platform. The step-by-step guide and personalized treatment plans make it easy to manage my health.',
        rating: 5
    }
];

function Reviews() {
    const reviewsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (reviewsRef.current) observer.observe(reviewsRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="reviews reveal" id="reviews" ref={reviewsRef}>
            <div className="reviews-bg-elements">
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
            </div>

            <div className="section-header">
                <h2 className="section-title">Patient Stories</h2>
                <p className="section-subtitle">Read what our community has to say about their experience with Medico AI</p>
            </div>

            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="review-stars">
                            {[...Array(review.rating)].map((_, i) => (
                                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <p className="review-content">"{review.content}"</p>
                        <div className="review-author">
                            <div className="author-info">
                                <h4 className="author-name">{review.name}</h4>
                                <p className="author-role">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
