import React, { useState, useEffect } from 'react';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-container reveal visible">
                <div className="contact-info">
                    <h1>Get in Touch</h1>
                    <p>Have questions about our AI solutions? We're here to help you revolutionize your healthcare practice.</p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h3>Location</h3>
                                <p>123 Medical Plaza, Innovation City</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📧</div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>contact@medicoai.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-text">
                                <h3>Phone</h3>
                                <p>+1 (555) 000-1234</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-social">
                        <a href="#" className="social-tag">LinkedIn</a>
                        <a href="#" className="social-tag">Twitter</a>
                        <a href="#" className="social-tag">Instagram</a>
                    </div>
                </div>

                <div className="contact-form-side">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Send us a Message</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us more about your needs..."
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                            <span>→</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
