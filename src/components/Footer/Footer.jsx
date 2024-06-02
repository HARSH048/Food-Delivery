import React from 'react';
import './Footer.css'

function Footer() {
    const socialLinks = [
        { name: 'Facebook', url: 'https://facebook.com' },
        { name: 'Twitter', url: 'https://twitter.com' },
        { name: 'Instagram', url: 'https://instagram.com' },
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h3>Follow Us</h3>
                    <ul>
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-info">
                    <h3>Contact Info</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
