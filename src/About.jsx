import React from 'react';

const AboutUs = () => {
  const stats = [
    { icon: '🍽️', number: '10,000+', label: 'Happy Customers' },
    { icon: '🏪', number: '500+', label: 'Restaurant Partners' },
    { icon: '🚚', number: '50,000+', label: 'Orders Delivered' },
    { icon: '⭐', number: '4.8', label: 'Average Rating' }
  ];

  const values = [
    { icon: '⚡', title: 'Fast Delivery', description: 'We ensure your food arrives hot and fresh within 30 minutes' },
    { icon: '🎯', title: 'Quality First', description: 'We partner only with the best restaurants in your area' },
    { icon: '💰', title: 'Best Prices', description: 'Enjoy great food at competitive prices with amazing deals' },
    { icon: '🤝', title: 'Customer Care', description: '24/7 support to assist you with any queries or concerns' }
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', emoji: '👩‍💼' },
    { name: 'Michael Chen', role: 'Chief Technology Officer', emoji: '👨‍💻' },
    { name: 'Emily Rodriguez', role: 'Head of Operations', emoji: '👩‍🔧' },
    { name: 'David Kim', role: 'Customer Experience Lead', emoji: '👨‍💼' }
  ];

  return (
    <div className="about-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          color: #1f2937;
        }

        .hero-section {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          padding: 80px 20px;
          text-align: center;
          color: white;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 20px;
          animation: fadeInUp 0.8s ease;
        }

        .hero-subtitle {
          font-size: 20px;
          line-height: 1.6;
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

        .stats-section {
          background: white;
          padding: 60px 20px;
          margin-top: -40px;
          position: relative;
          z-index: 1;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .stat-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
        }

        .stat-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          color: #ff6b6b;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          color: #6b7280;
          font-weight: 500;
        }

        .story-section {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 120px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .story-content h2 {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 20px;
          color: #1f2937;
        }

        .story-content p {
          font-size: 16px;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 15px;
        }

        .values-section {
          background: #f9fafb;
          padding: 80px 20px;
        }

        .values-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 50px;
          color: #1f2937;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .value-card {
          background: white;
          padding: 40px 30px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .value-icon {
          font-size: 56px;
          margin-bottom: 20px;
        }

        .value-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1f2937;
        }

        .value-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
        }

        .team-section {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 50px;
        }

        .team-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
        }

        .team-avatar {
          width: 100px;
          height: 100px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
        }

        .team-name {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #1f2937;
        }

        .team-role {
          font-size: 14px;
          color: #6b7280;
        }

        .cta-section {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          padding: 80px 20px;
          text-align: center;
          color: white;
        }

        .cta-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .cta-text {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: white;
          color: #ff6b6b;
          font-size: 16px;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .stats-container,
          .values-grid,
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .story-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 36px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .stats-container,
          .values-grid,
          .team-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .story-content h2,
          .section-title {
            font-size: 28px;
          }

          .story-image {
            height: 300px;
            font-size: 80px;
          }

          .cta-title {
            font-size: 28px;
          }

          .hero-section,
          .stats-section,
          .values-section,
          .team-section,
          .cta-section {
            padding: 60px 20px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Cookers</h1>
          <p className="hero-subtitle">
            We're on a mission to deliver happiness, one meal at a time. 
            Connecting food lovers with their favorite restaurants since 2020.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-image">🍕</div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Cookers was born from a simple idea: everyone deserves access to 
            delicious food, delivered fast and fresh to their doorstep.
          </p>
          <p>
            What started as a small local delivery service has grown into a platform 
            connecting thousands of customers with hundreds of restaurants. We've 
            built our success on three pillars: speed, quality, and customer satisfaction.
          </p>
          <p>
            Today, we're proud to serve communities across the country, helping people 
            discover new flavors while supporting local restaurants and creating 
            opportunities for delivery partners.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.emoji}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Order?</h2>
        <p className="cta-text">
          Join thousands of happy customers and experience the Cookers difference
        </p>
        <button className="cta-button">Order Now</button>
      </section>
    </div>
  );
};

export default AboutUs;