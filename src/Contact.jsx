import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      info: '123 Food Street, Culinary District',
      subInfo: 'New York, NY 10001'
    },
    {
      icon: '📞',
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      subInfo: 'Mon-Sun: 8AM - 11PM'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      info: 'support@foodieexpress.com',
      subInfo: 'We reply within 24 hours'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      info: 'Chat with our team',
      subInfo: 'Available 24/7'
    }
  ];

  const faqs = [
    {
      question: 'What are your delivery hours?',
      answer: 'We deliver 7 days a week from 8 AM to 11 PM.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Most orders arrive within 30-45 minutes.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and digital wallets.'
    }
  ];

  return (
    <div className="contact-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          color: #1f2937;
        }

        .hero-section {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          padding: 80px 20px 120px;
          text-align: center;
          color: white;
          position: relative;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
          animation: fadeInUp 0.8s ease;
        }

        .hero-subtitle {
          font-size: 18px;
          opacity: 0.95;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-info-section {
          max-width: 1200px;
          margin: -60px auto 80px;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .info-card {
          background: white;
          padding: 32px 24px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-8px);
        }

        .info-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .info-title {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .info-text {
          font-size: 14px;
          color: #4b5563;
          margin-bottom: 4px;
        }

        .info-subtext {
          font-size: 12px;
          color: #9ca3af;
        }

        .main-section {
          max-width: 1200px;
          margin: 0 auto 80px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .form-section {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .section-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 24px;
          color: #1f2937;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          color: #1f2937;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          border-color: #ff6b6b;
          box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .submit-button {
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
        }

        .map-section {
          background: #f3f4f6;
          border-radius: 20px;
          overflow: hidden;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
        }

        .faq-section {
          margin-top: 40px;
        }

        .faq-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #1f2937;
        }

        .faq-item {
          background: white;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .faq-question {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .faq-answer {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
        }

        .social-section {
          background: #f9fafb;
          padding: 60px 20px;
          text-align: center;
        }

        .social-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #1f2937;
        }

        .social-subtitle {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 32px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .social-link {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .contact-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .main-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 36px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-section {
            padding: 24px;
          }

          .hero-title {
            font-size: 32px;
          }

          .section-title {
            font-size: 24px;
          }

          .hero-section {
            padding: 60px 20px 100px;
          }

          .map-section {
            height: 300px;
            font-size: 60px;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Get In Touch</h1>
        <p className="hero-subtitle">
          We'd love to hear from you. Our team is here to help!
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">{item.icon}</div>
              <h3 className="info-title">{item.title}</h3>
              <p className="info-text">{item.info}</p>
              <p className="info-subtext">{item.subInfo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-section">
        <div className="form-section">
          <h2 className="section-title">Send Us a Message</h2>
          <div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
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
              <div className="form-group">
                <label className="form-label">Subject</label>
                <select
                  name="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Issue</option>
                  <option value="restaurant">Restaurant Partnership</option>
                  <option value="delivery">Delivery Partner</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell us how we can help you..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="submit-button" onClick={handleSubmit}>
              Send Message
            </button>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="map-section">
            🗺️
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <h2 className="social-title">Follow Us</h2>
        <p className="social-subtitle">
          Stay connected with us on social media for updates and exclusive deals
        </p>
        <div className="social-links">
          <a className="social-link" aria-label="Facebook">f</a>
          <a className="social-link" aria-label="Twitter">𝕏</a>
          <a className="social-link" aria-label="Instagram">📷</a>
          <a className="social-link" aria-label="LinkedIn">in</a>
          <a className="social-link" aria-label="YouTube">▶</a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;