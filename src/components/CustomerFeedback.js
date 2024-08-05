// src/components/CustomerFeedback.js
import React from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      <div className="feedback">
        <h4>Jenny Wilson</h4>
        <p>⭐⭐⭐⭐⭐</p>
        <p>The food was excellent and so was the service...</p>
      </div>
      <div className="feedback">
        <h4>Dianne Russell</h4>
        <p>⭐⭐⭐⭐</p>
        <p>We enjoyed the Eggs Benedict served on homemade focaccia...</p>
      </div>
      {/* Add more feedback as needed */}
    </div>
  );
};

export default CustomerFeedback;
