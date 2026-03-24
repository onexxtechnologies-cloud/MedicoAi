import React, { useEffect, useRef } from 'react';
import './Benefits.css';

const benefits = [
    {
        title: "Precision AI Diagnosis",
        desc: "Harness the power of advanced neural networks to analyze symptoms with 99.9% precision. Our AI maps your health data against millions of clinical rubrics, ensuring a diagnosis that's both accurate and reliable for holistic and conventional treatments.",
        image: "/images/benefits/precision_ai.png"
    },
    {
        title: "Seamless Integration",
        desc: "Experience the harmony of Homeopathy and Allopathy in one platform. Medico AI bridges the gap between traditional wisdom and modern science, providing a comprehensive treatment plan that addresses the root cause while managing symptoms effectively.",
        image: "/images/benefits/seamless_integration.png"
    },
    {
        title: "24/7 Virtual Support",
        desc: "Your health doesn't follow a schedule, and neither do we. Get instant medical insights and support at any hour of the day. Whether it's a midnight concern or a quick check-up, our AI is always ready to assist you on your wellness journey.",
        image: "/images/benefits/virtual_support.png"
    },
    {
        title: "Personalized Wellness",
        desc: "No two individuals are the same, and your treatment shouldn't be either. Receive a fully customized health roadmap tailored to your unique biology, lifestyle, and history, empowering you to achieve optimal well-being with data-driven confidence.",
        image: "/images/benefits/personalized_wellness.png"
    }
];

function Benefits() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const header = document.querySelector('.benefits-header');
        if (header) observer.observe(header);

        cardsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="benefits-section" id="benefits">
            <div className="benefits-container">
                <div className="benefits-header">
                    <span className="section-tag">Why Choose Medico AI?</span>
                    <h2 className="section-title">Revolutionizing Your Health Journey</h2>
                    <p className="section-subtitle">
                        Experience the next generation of medical intelligence with benefits designed to put you back in control of your well-being.
                    </p>
                </div>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="benefit-card reveal" 
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="benefit-image-wrapper">
                                <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                            </div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-desc">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;
