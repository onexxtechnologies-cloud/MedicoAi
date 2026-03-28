import React, { useEffect, useRef } from 'react';
import './Reviews.css';

const reviews = [
    {
        name: 'Agna Patel',
        role: 'Verified Patient',
        content: 'The AI analysis provided by Medico AI was surprisingly accurate. It helped me understand my symptoms better and suggested a holistic approach that really worked for me.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Agna&mouth=smile&backgroundColor=b6e3f4'
    },
    {
        name: 'Rajesh Kumar',
        role: 'Healthcare Professional',
        content: 'I was skeptical about AI in healthcare, but Medico AI changed my mind. The integration of allopathic and homeopathic suggestions is brilliant.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh&mouth=smile&clothing=blazerAndShirt&accessories=prescription02&backgroundColor=c0aede'
    },
    {
        name: 'Sarah Johnson',
        role: 'Verified Patient',
        content: 'A very user-friendly platform. The step-by-step guide and personalized treatment plans make it easy to manage my health.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&mouth=smile&backgroundColor=ffdfbf'
    },
    {
        name: 'Dr. Amit Sharma',
        role: 'Healthcare Professional',
        content: 'The diagnostic precision here is unmatched. It\'s a game-changer for digital health and patient management.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit&mouth=smile&clothing=blazerAndShirt&accessories=prescription02&backgroundColor=d1d4f9'
    },
    {
        name: 'Meera Reddy',
        role: 'Verified Patient',
        content: 'Managing my family\'s health history has never been easier or more secure. I love the personalized insights.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&mouth=smile&backgroundColor=ffd5dc'
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

    // Double the reviews for a seamless infinite scroll loop
    const marqueeReviews = [...reviews, ...reviews];

    return (
        <section className="reviews reveal" id="reviews" ref={reviewsRef}>
            <div className="reviews-bg-elements">
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
                <div className="bg-blob blob-3"></div>
            </div>

            <div className="section-header">
                <h2 className="section-title">Patient Stories</h2>
                <p className="section-subtitle">Real experiences from our community of patients and healthcare providers.</p>
            </div>

            <div className="marquee-container">
                <div className="marquee-track">
                    {marqueeReviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="author-avatar-wrapper">
                                    <img src={review.avatar} alt={review.name} className="author-avatar" />
                                </div>
                                <div className="review-stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            
                            <p className="review-content">"{review.content}"</p>
                            
                            <div className="author-info">
                                <h4 className="author-name">{review.name}</h4>
                                <p className="author-role">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews;
