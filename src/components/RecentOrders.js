// src/components/RecentOrders.js
import React from "react";
import "./RecentOrders.css";

const RecentOrders = () => {
  return (
    <div className="overview">
      <div className="card tab" style={{ width: "42rem", height: "22rem" }}>
        <div className="recent-orders">
          <h3>Recent Orders</h3>
          <table className="tab">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wade Warren</td>
                <td>15478256</td>
                <td>$124.00</td>
                <td>Delivered</td>
              </tr>
              <tr>
                <td>Jane Cooper</td>
                <td>48967586</td>
                <td>$305.02</td>
                <td>Delivered</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card" style={{ width: "1rem", height: "22rem" }}>
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
      </div>
    </div>
  );
};

export default RecentOrders;
