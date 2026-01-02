import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Login successful!');
    } else {
      if (formData.password === formData.confirmPassword) {
        alert('Account created successfully!');
      } else {
        alert('Passwords do not match!');
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      phone: ''
    });
  };

  return (
    <div className="login-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .login-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
        }

        .left-section {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .left-section::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -200px;
          right: -200px;
        }

        .left-section::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          bottom: -100px;
          left: -100px;
        }

        .brand-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .brand-logo {
          font-size: 80px;
          margin-bottom: 24px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .brand-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .brand-subtitle {
          font-size: 18px;
          opacity: 0.95;
          line-height: 1.6;
          max-width: 400px;
        }

        .features-list {
          margin-top: 40px;
          text-align: left;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 16px;
        }

        .feature-icon {
          font-size: 24px;
        }

        .right-section {
          padding: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafafa;
        }

        .form-container {
          width: 100%;
          max-width: 440px;
        }

        .form-header {
          margin-bottom: 32px;
        }

        .form-title {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .form-subtitle {
          font-size: 15px;
          color: #6b7280;
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          border-color: #ff6b6b;
          transform: translateY(-2px);
        }

        .social-icon {
          font-size: 20px;
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 24px 0;
          color: #9ca3af;
          font-size: 14px;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .divider-text {
          padding: 0 16px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 15px;
          color: #1f2937;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #ff6b6b;
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: #6b7280;
        }

        .forgot-password {
          text-align: right;
          margin-bottom: 20px;
        }

        .forgot-link {
          color: #ff6b6b;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
        }

        .toggle-mode {
          text-align: center;
          margin-top: 24px;
          font-size: 14px;
          color: #6b7280;
        }

        .toggle-link {
          color: #ff6b6b;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .toggle-link:hover {
          text-decoration: underline;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .checkbox {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .checkbox-label {
          font-size: 14px;
          color: #4b5563;
        }

        @media (max-width: 1024px) {
          .login-container {
            grid-template-columns: 1fr;
          }

          .left-section {
            display: none;
          }

          .right-section {
            padding: 40px 20px;
          }
        }

        @media (max-width: 768px) {
          .form-title {
            font-size: 28px;
          }

          .social-login {
            grid-template-columns: 1fr;
          }

          .right-section {
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* Left Section */}
      <div className="left-section">
        <div className="brand-content">
          <div className="brand-logo">🍔</div>
          <h1 className="brand-title">Cookers</h1>
          <p className="brand-subtitle">
            Your favorite meals delivered fresh and fast, right to your doorstep.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Fast delivery in 30 minutes</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏪</span>
              <span>500+ restaurant partners</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>Best deals and discounts</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⭐</span>
              <span>Rated 4.8 by customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="form-container">
          <div className="form-header">
            <h2 className="form-title">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="form-subtitle">
              {isLogin 
                ? 'Sign in to continue ordering your favorite meals' 
                : 'Join us and start ordering delicious food'}
            </p>
          </div>

          {/* Social Login */}
          <div className="social-login">
            <button className="social-btn">
              <span className="social-icon">G</span>
              Google
            </button>
            <button className="social-btn">
              <span className="social-icon">f</span>
              Facebook
            </button>
          </div>

          <div className="divider">
            <span className="divider-text">Or continue with email</span>
          </div>

          {/* Form */}
          <div>
            {!isLogin && (
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )}

            {isLogin ? (
              <div className="forgot-password">
                <a className="forgot-link">Forgot Password?</a>
              </div>
            ) : (
              <div className="checkbox-group">
                <input type="checkbox" className="checkbox" id="terms" />
                <label htmlFor="terms" className="checkbox-label">
                  I agree to the Terms & Conditions
                </label>
              </div>
            )}

            <button className="submit-btn" onClick={handleSubmit}>
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>

          <div className="toggle-mode">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <span className="toggle-link" onClick={toggleMode}>
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span className="toggle-link" onClick={toggleMode}>
                  Sign in
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;