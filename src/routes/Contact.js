import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };

    return (
        <div className="contactPage">
            <div className="header">
                <h2>Contact</h2>
            </div>

            <div className="contactContent">
                <div className="contactForm">
                    <h3>Get in Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                            />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="contactInfo">
                    <h3>Contact Information</h3>
                    <p>If you prefer, you can also reach out to me directly:</p>
                    <p className="contact-email"><strong className="label">Email:</strong> <span
                        className="info">frejamadsen1408@gmail.com</span></p>
                    <p className="contact-phone"><strong className="label">Phone:</strong> <span
                        className="info">21854409</span></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
