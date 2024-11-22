import React, { useRef, useState } from 'react';
import '../css/Contact.css';
import Wave from '../routes/Elements/Wave';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        to_name: '',
        from_email: '',
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

        emailjs.sendForm(
            "service_0xjqsib", // Your EmailJS service ID
            "template_xokcfcc", // Your EmailJS template ID
            form.current, // Reference to the form
            "StGjl_JgAL9BqR1od" // Your EmailJS public key
        )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("An error occurred, please try again.");
                }
            );
    };

    return (
        <><Wave /><div className="contactPage">


            {/*<div className="header">
        <h2>Contact Me</h2>
    </div>*/}

            <div className="contactContent">
                <div className="contactForm">
                    <h3>Get in Touch</h3>
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="to_name">Name:</label>
                            <input
                                type="text"
                                id="to_name"
                                name="to_name"
                                value={formData.to_name}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="from_email">Email:</label>
                            <input
                                type="email"
                                id="from_email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required />
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
        </div></>
    );
}

export default Contact;
