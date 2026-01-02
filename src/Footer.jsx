import React, { useState } from 'react';

const FoodDeliveryFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .footer {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          padding: 60px 20px 20px;
          margin-top: 80px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-column h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-column h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 3px;
          background: white;
          border-radius: 2px;
        }

        .footer-column ul {
          list-style: none;
        }

        .footer-column ul li {
          margin-bottom: 12px;
        }

        .footer-column ul li a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-column ul li a:hover {
          color: white;
          transform: translateX(5px);
        }

        .footer-brand {
          margin-bottom: 20px;
        }

        .brand-logo {
          font-size: 28px;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-icon {
          font-size: 32px;
        }

        .brand-tagline {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          font-size: 18px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-link:hover {
          background: white;
          color: #ff6b6b;
          transform: translateY(-3px);
        }

        .app-download {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .app-button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          border-radius: 8px;
          padding: 10px 20px;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          font-size: 14px;
          cursor: pointer;
        }

        .app-button:hover {
          background: white;
          color: #ff6b6b;
          transform: translateY(-2px);
        }

        .app-icon {
          font-size: 24px;
        }

        .app-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .app-label {
          font-size: 10px;
          opacity: 0.9;
        }

        .app-name {
          font-weight: 600;
          font-size: 14px;
        }

        .newsletter {
          margin-top: 20px;
        }

        .newsletter-form {
          display: flex;
          margin-top: 12px;
        }

        .newsletter-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px 0 0 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 14px;
          outline: none;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .newsletter-input:focus {
          border-color: white;
          background: rgba(255, 255, 255, 0.2);
        }

        .newsletter-button {
          padding: 12px 24px;
          background: white;
          color: #ff6b6b;
          border: none;
          border-radius: 0 8px 8px 0;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-button:hover {
          background: #f8f9fa;
          transform: scale(1.05);
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 40px 0 20px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
          list-style: none;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-bottom-links a:hover {
          color: white;
        }

        .payment-methods {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .payment-icon {
          width: 45px;
          height: 30px;
          background: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          color: #ff6b6b;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer {
            padding: 40px 20px 20px;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 12px;
          }

          .payment-methods {
            justify-content: center;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-input {
            border-radius: 8px;
            margin-bottom: 8px;
          }

          .newsletter-button {
            border-radius: 8px;
          }
        }

        @media (max-width: 480px) {
          .app-download {
            width: 100%;
          }

          .app-button {
            justify-content: center;
          }

          .brand-logo {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-brand">
              <div className="brand-logo">
                <span className="logo-icon">🍔</span>
                Cookers
              </div>
              <p className="brand-tagline">
                Delivering happiness to your doorstep. Order your favorite meals from the best restaurants in town.
              </p>
            </div>
            <div className="social-links">
              <a className="social-link" aria-label="Facebook">f</a>
              <a className="social-link" aria-label="Twitter">𝕏</a>
              <a className="social-link" aria-label="Instagram">📷</a>
              <a className="social-link" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a>About Us</a></li>
              <li><a>Team</a></li>
              <li><a>Careers</a></li>
              <li><a>Blog</a></li>
              <li><a>Press</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>For You</h3>
            <ul>
              <li><a>Privacy Policy</a></li>
              <li><a>Terms & Conditions</a></li>
              <li><a>Refund Policy</a></li>
              <li><a>Help Center</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Get the App</h3>
            <div className="app-download">
              <div className="app-button">
                <span className="app-icon">🍎</span>
                <div className="app-text">
                  <span className="app-label">Download on the</span>
                  <span className="app-name">App Store</span>
                </div>
              </div>
              <div className="app-button">
                <span className="app-icon">📱</span>
                <div className="app-text">
                  <span className="app-label">Get it on</span>
                  <span className="app-name">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h3>Subscribe to our Newsletter</h3>
          <div className="newsletter">
            <div className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="newsletter-button" onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 FoodieExpress. All rights reserved.</p>
          
          <ul className="footer-bottom-links">
            <li><a>Privacy</a></li>
            <li><a>Terms</a></li>
            <li><a>Cookies</a></li>
          </ul>

          <div className="payment-methods">
            <span style={{cursor:"pointer"}} className="payment-icon">VISA</span>
            <span style={{cursor:"pointer"}} className="payment-icon">💳</span>
            <span style={{cursor:"pointer"}} className="payment-icon">PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FoodDeliveryFooter;