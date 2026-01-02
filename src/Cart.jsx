import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Margherita Pizza',
      restaurant: 'Italian Bistro',
      price: 12.99,
      quantity: 2,
      image: '🍕',
      customizations: 'Extra cheese, Thin crust'
    },
    {
      id: 2,
      name: 'Chicken Burger',
      restaurant: 'Burger Palace',
      price: 8.99,
      quantity: 1,
      image: '🍔',
      customizations: 'No onions, Extra sauce'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      restaurant: 'Fresh Garden',
      price: 7.49,
      quantity: 1,
      image: '🥗',
      customizations: 'Dressing on side'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      setAppliedPromo({ code: 'SAVE10', discount: 10 });
      alert('Promo code applied! 10% discount added.');
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? (subtotal * appliedPromo.discount / 100) : 0;
  const deliveryFee = 3.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + deliveryFee + tax;

  return (
    <div className="cart-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cart-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: #f9fafb;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .cart-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cart-header {
          margin-bottom: 32px;
        }

        .cart-title {
          font-size: 36px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .cart-subtitle {
          font-size: 16px;
          color: #6b7280;
        }

        .cart-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 24px;
        }

        .cart-items-section {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .items-header {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #f3f4f6;
        }

        .cart-item {
          display: flex;
          gap: 16px;
          padding: 20px;
          border: 2px solid #f3f4f6;
          border-radius: 12px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .cart-item:hover {
          border-color: #ff6b6b;
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.1);
        }

        .item-image {
          font-size: 60px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
          border-radius: 12px;
        }

        .item-details {
          flex: 1;
        }

        .item-name {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .item-restaurant {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .item-customizations {
          font-size: 13px;
          color: #9ca3af;
          margin-bottom: 12px;
        }

        .item-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f3f4f6;
          border-radius: 8px;
          padding: 4px;
        }

        .quantity-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: white;
          border-radius: 6px;
          font-size: 18px;
          font-weight: 700;
          color: #ff6b6b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quantity-btn:hover {
          background: #ff6b6b;
          color: white;
        }

        .quantity-value {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          min-width: 24px;
          text-align: center;
        }

        .item-price {
          font-size: 18px;
          font-weight: 700;
          color: #ff6b6b;
        }

        .remove-btn {
          background: none;
          border: none;
          color: #ef4444;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px;
          transition: all 0.2s ease;
        }

        .remove-btn:hover {
          color: #dc2626;
          text-decoration: underline;
        }

        .summary-section {
          position: sticky;
          top: 20px;
        }

        .promo-card,
        .summary-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          margin-bottom: 16px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .promo-input-group {
          display: flex;
          gap: 8px;
        }

        .promo-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .promo-input:focus {
          border-color: #ff6b6b;
        }

        .promo-btn {
          padding: 12px 20px;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .promo-btn:hover {
          background: #ee5a24;
        }

        .applied-promo {
          background: #d1fae5;
          color: #065f46;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
          margin-top: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 15px;
        }

        .summary-label {
          color: #6b7280;
        }

        .summary-value {
          color: #1f2937;
          font-weight: 600;
        }

        .discount-value {
          color: #10b981;
        }

        .summary-divider {
          height: 1px;
          background: #e5e7eb;
          margin: 16px 0;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          font-weight: 800;
          color: #1f2937;
          margin-top: 16px;
        }

        .checkout-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
        }

        .checkout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
        }

        .empty-cart {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 16px;
        }

        .empty-icon {
          font-size: 80px;
          margin-bottom: 16px;
        }

        .empty-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .empty-text {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .browse-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .browse-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .cart-content {
            grid-template-columns: 1fr;
          }

          .summary-section {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .cart-title {
            font-size: 28px;
          }

          .cart-item {
            flex-direction: column;
          }

          .item-image {
            width: 100%;
            height: 120px;
            font-size: 80px;
          }

          .item-actions {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .promo-input-group {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="cart-wrapper">
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="cart-subtitle">{cartItems.length} items in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2 className="empty-title">Your cart is empty</h2>
            <p className="empty-text">Add some delicious food to get started!</p>
            <button className="browse-btn">Browse Restaurants</button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <h2 className="items-header">Your Items</h2>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">{item.image}</div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-restaurant">📍 {item.restaurant}</p>
                    <p className="item-customizations">{item.customizations}</p>
                    <div className="item-actions">
                      <div className="quantity-control">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          −
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="summary-section">
              <div className="promo-card">
                <h3 className="card-title">Promo Code</h3>
                <div className="promo-input-group">
                  <input 
                    type="text"
                    className="promo-input"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button className="promo-btn" onClick={applyPromo}>Apply</button>
                </div>
                {appliedPromo && (
                  <div className="applied-promo">
                    <span>✓ {appliedPromo.code} applied ({appliedPromo.discount}% off)</span>
                  </div>
                )}
              </div>

              <div className="summary-card">
                <h3 className="card-title">Order Summary</h3>
                <div className="summary-row">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="summary-row">
                    <span className="summary-label">Discount</span>
                    <span className="discount-value">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span className="summary-label">Delivery Fee</span>
                  <span className="summary-value">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Tax</span>
                  <span className="summary-value">${tax.toFixed(2)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;