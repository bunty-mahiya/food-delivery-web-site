import React, { useState } from 'react';

// This component is designed to be used as an errorElement in React Router
// Usage in your router config:
// {
//   path: "/",
//   element: <App />,
//   errorElement: <RouterErrorElement />,
// }

const RouterErrorElement = () => {
  // Simulating different error types for demo
  const [demoError, setDemoError] = useState({
    status: 404,
    message: 'The page you are looking for does not exist.',
    statusText: 'Not Found'
  });

  const getErrorDetails = (error) => {
    if (error?.status === 404) {
      return {
        title: '404 - Page Not Found',
        message: 'The page you are looking for does not exist.',
        code: '404'
      };
    }
    
    if (error?.status === 403) {
      return {
        title: '403 - Forbidden',
        message: 'You do not have permission to access this page.',
        code: '403'
      };
    }
    
    if (error?.status === 500) {
      return {
        title: '500 - Server Error',
        message: 'Something went wrong on our end. Please try again later.',
        code: '500'
      };
    }

    return {
      title: 'Oops! Something went wrong',
      message: error?.message || error?.statusText || 'An unexpected error occurred.',
      code: '!'
    };
  };

  const errorDetails = getErrorDetails(demoError);

  return (
    <div className="error-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .error-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          padding: 20px;
        }

        .error-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 100%;
          padding: 48px 32px;
          text-align: center;
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .error-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          margin-bottom: 24px;
          animation: pulse 2s infinite;
          position: relative;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .error-icon {
          font-size: 48px;
          color: white;
          font-weight: 700;
        }

        .error-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .error-message {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .button-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #374151;
        }

        .btn-secondary:hover {
          background: #e5e7eb;
          transform: translateY(-2px);
        }

        .icon-home::before {
          content: "🏠";
          font-size: 18px;
        }

        .icon-back::before {
          content: "←";
          font-size: 18px;
          font-weight: bold;
        }

        .icon-refresh::before {
          content: "↻";
          font-size: 18px;
          font-weight: bold;
        }

        .demo-controls {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid #e5e7eb;
        }

        .demo-title {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .demo-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .demo-btn {
          padding: 8px 16px;
          font-size: 12px;
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .demo-btn:hover {
          background: #e5e7eb;
        }

        @media (max-width: 480px) {
          .error-card {
            padding: 32px 24px;
          }

          .error-title {
            font-size: 24px;
          }

          .button-group {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="error-card">
        <div className="error-icon-wrapper">
          <div className="error-icon">{errorDetails.code}</div>
        </div>
        
        <h1 className="error-title">{errorDetails.title}</h1>
        <p className="error-message">{errorDetails.message}</p>

        {/* <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={() => alert('In your app: navigate("/")')}
          >
            <span className="icon-home"></span>
            Go Home
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={() => alert('In your app: navigate(-1)')}
          >
            <span className="icon-back"></span>
            Go Back
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={() => window.location.reload()}
          >
            <span className="icon-refresh"></span>
            Refresh
          </button>
        </div> */}

        <div className="demo-controls">
          <div className="demo-title">Demo: Try Different Errors</div>
          <div className="demo-buttons">
            <button 
              className="demo-btn"
              onClick={() => setDemoError({ status: 404, message: 'The page you are looking for does not exist.' })}
            >
              404 Error
            </button>
            <button 
              className="demo-btn"
              onClick={() => setDemoError({ status: 403, message: 'You do not have permission to access this page.' })}
            >
              403 Error
            </button>
            <button 
              className="demo-btn"
              onClick={() => setDemoError({ status: 500, message: 'Something went wrong on our end.' })}
            >
              500 Error
            </button>
            <button 
              className="demo-btn"
              onClick={() => setDemoError({ message: 'Network connection failed' })}
            >
              Generic Error
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouterErrorElement;