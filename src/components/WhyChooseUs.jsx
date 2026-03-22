import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        cardsRef.current.forEach(el => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    return (
        <section className="why-choose" id="why-choose-us">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-row">
                {/* Card 1 */}
                <div className="feature-card reveal" ref={el => cardsRef.current[0] = el}>
                    <div className="feature-icon">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="12" y="12" width="40" height="40" rx="6" fill="#059669" />
                            <path d="M32 4v8M32 52v8M4 32h8M52 32h8M20 4v8M44 4v8M20 52v8M44 52v8M4 20h8M4 44h8M52 20h8M52 44h8" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
                            <rect x="22" y="22" width="20" height="20" rx="3" fill="#ffffff" />
                            <path d="M28 32h8M32 28v8" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Cutting-Edge AI Technology</h3>
                    <p className="feature-desc">State-of-the-art AI for both holistic and conventional medicine</p>
                </div>

                {/* Card 2 */}
                <div className="feature-card reveal" ref={el => cardsRef.current[1] = el}>
                    <div className="feature-icon">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="16" r="10" fill="#059669" />
                            <path d="M18 48c0-7.7 6.3-14 14-14s14 6.3 14 14v4H18v-4z" fill="#059669" />
                            <circle cx="14" cy="24" r="7" fill="#10b981" />
                            <path d="M4 46c0-5.5 4.5-10 10-10s10 4.5 10 10v4H4v-4z" fill="#10b981" />
                            <circle cx="50" cy="24" r="7" fill="#10b981" />
                            <path d="M40 46c0-5.5 4.5-10 10-10s10 4.5 10 10v4H40v-4z" fill="#10b981" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Experienced Specialists</h3>
                    <p className="feature-desc">Skilled professionals in homeopathy and allopathy</p>
                </div>

                {/* Card 3 */}
                <div className="feature-card reveal" ref={el => cardsRef.current[2] = el}>
                    <div className="feature-icon">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 58l-4.5-4C12.5 41 4 33.5 4 21c0-9.5 7.5-17 17-17 5.5 0 10.5 2.5 13 6.5 2.5-4 7.5-6.5 13-6.5 9.5 0 17 7.5 17 17 0 12.5-8.5 20-23.5 33L32 58z" fill="#2563eb" />
                            <path d="M22 22h10M27 17v10" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                            <path d="M38 32h10M43 27v10" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Comprehensive Care</h3>
                    <p className="feature-desc">Holistic approach tailored to your unique health needs</p>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
