import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import "./Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Determine API URL based on current environment
  const getApiBaseUrl = () => {
    // If we're on Vercel deployment, use Render backend
    if (window.location.hostname.includes('vercel.app')) {
      return 'https://organic-deliver.onrender.com';
    }
    // If we're on localhost, use local backend
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:5000';
    }
    // Default to Render backend for other cases
    return 'https://organic-deliver.onrender.com';
  };

  const API_BASE_URL = getApiBaseUrl();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      console.log("Attempting registration with:", `${API_BASE_URL}/api/users/register`);
      
      const { data } = await axios.post(`${API_BASE_URL}/api/users/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      login(data, data.token);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("❌ Registration Error:", error);
      
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.code === "ERR_NETWORK") {
        toast.error("Cannot connect to server. Please check if the backend is running.");
        console.error("Backend URL:", API_BASE_URL);
      } else if (error.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join us for fresh organic deliveries</p>
            <small className="environment-info">
              Environment: {window.location.hostname.includes('vercel.app') ? 'Production' : 'Development'}
            </small>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="auth-input"
                placeholder=" "
              />
              <label className="auth-label">Full Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="auth-input"
                placeholder=" "
              />
              <label className="auth-label">Email Address</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="auth-input"
                placeholder=" "
                minLength="6"
              />
              <label className="auth-label">Password (min. 6 characters)</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="auth-input"
                placeholder=" "
                minLength="6"
              />
              <label className="auth-label">Confirm Password</label>
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Create Account"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Sign in
              </Link>
            </p>
          </div>

          {/* Debug info - only show in development */}
          {!window.location.hostname.includes('vercel.app') && (
            <div className="debug-info">
              <small>Backend URL: {API_BASE_URL}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
