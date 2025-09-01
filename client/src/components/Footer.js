import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="brand-icon">🌱</span>
              <h3>Organic Delivery</h3>
            </div>
            <p>Fresh, healthy, and delicious organic food delivered right to your doorstep. We're committed to sustainable farming and supporting local producers.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Fresh Vegetables</a></li>
              <li><a href="#">Seasonal Fruits</a></li>
              <li><a href="#">Dairy & Eggs</a></li>
              <li><a href="#">Bakery</a></li>
              <li><a href="#">Meat & Seafood</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <MapPin size={18} />
              <span>123 Organic Street, Green City</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 9360702428</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>panneer.v.vtr@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Organic Delivery. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;