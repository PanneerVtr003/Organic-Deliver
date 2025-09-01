import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-icon">🌱</span>
          Organic Delivery
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-item ${isActiveLink('/') ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`navbar-item ${isActiveLink('/menu') ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            Menu
          </Link>

          {currentUser ? (
            <>
              <Link 
                to="/cart" 
                className={`navbar-item cart-link ${isActiveLink('/cart') ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                <ShoppingCart size={20} />
                <span className="cart-count">{getCartItemsCount()}</span>
                Cart
              </Link>
              <div className="navbar-item user-menu">
                <User size={20} />
                <span>Hello, {currentUser.name}</span>
                <div className="dropdown">
                  <Link to="/profile" onClick={closeMenu}>Profile</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </>
          ) : (
            <div className="navbar-item auth-links">
              <Link to="/login" className="btn btn-secondary" onClick={closeMenu}>Login</Link>
              <Link to="/register" className="btn btn-primary" onClick={closeMenu}>Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;