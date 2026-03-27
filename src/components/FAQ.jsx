import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: 'What is MEDICO AI?',
        answer: 'MEDICO AI is a cutting-edge healthcare platform that leverages artificial intelligence to provide personalized treatment plans from both homeopathic and allopathic perspectives.'
    },
    {
        question: 'How does the AI analysis work?',
        answer: 'Our AI analyzes your symptoms, medical history, and lifestyle data to identify patterns and suggest the most effective remedies or treatments tailored specifically to you.'
    },
    {
        question: 'Is it safe to use AI for medical advice?',
        answer: 'MEDICO AI is designed to support and enhance professional medical consultation, not replace it. Always consult with a qualified healthcare provider before starting any new treatment.'
    },
    {
        question: 'Can I integrate both homeopathic and allopathic treatments?',
        answer: 'Yes! Our platform specializes in holistic health, meaning we look at how different medical approaches can work together for your overall well-being.'
    }
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqRef = useRef(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (faqRef.current) observer.observe(faqRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="faq reveal" id="faq" ref={faqRef}>
            <div className="faq-bg-elements">
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
                <div className="bg-blob blob-3"></div>
            </div>



            <div className="section-header">
                <h2 className="section-title">Common Questions</h2>
                <p className="section-subtitle">Find answers to frequently asked questions about our AI solutions</p>
            </div>

            <div className="faq-container">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="faq-question">
                            <h3>{item.question}</h3>
                            <span className="faq-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
