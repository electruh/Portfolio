import React, { useState } from 'react';

function Contact() {
    const Footer = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [message, setMessage] = useState('');
        const [submitted, setSubmitted] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();

            setName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
            setSubmitted(true);
        };

        return (
            <div className="footer-container">
                <h3><span className="blue-text">Contact Me</span></h3>
                <p>Email: allanissumaya22@gmail.com</p>

                {submitted ? (
                    <p>Thank you for your message!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
        );
    };

    return (
        <div>
            <Footer />
        </div>
    );
}

export default Contact;
