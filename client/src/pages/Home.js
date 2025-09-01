import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Truck, Shield, Heart } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import './Home.css';

const Home = ({ foods }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Fresh Organic Food Delivered to Your Door</h1>
            <p>Discover the finest selection of organic fruits, vegetables, and meals prepared with love and care for your healthy lifestyle.</p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                Order Now <ChevronRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="https://healthybuddha.in/image/catalog/Recentblogs/blogs/fresh-vegetables-food.jpg" alt="Fresh organic food" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <Truck size={48} />
              </div>
              <h3>Fast Delivery</h3>
              <p>Get your fresh food delivered within hours of ordering. We prioritize freshness and timely delivery.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Shield size={48} />
              </div>
              <h3>Quality Guarantee</h3>
              <p>All our products are certified organic and sourced from trusted local farmers with sustainable practices.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Heart size={48} />
              </div>
              <h3>Healthy Living</h3>
              <p>We're committed to supporting your health journey with nutritious, delicious organic options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="popular-items">
        <div className="container">
          <h2 className="section-title">Popular This Week</h2>
          <div className="items-grid">
            {foods.map(food => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>
          <div className="center-button">
            <Link to="/menu" className="btn btn-primary">
              View Full Menu <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers, new products, and health tips.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;