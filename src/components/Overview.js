// src/components/Overview.js
import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <div className="card" style={{ width: "1rem", height:"8rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Total Orders</h5>
          <p className="card-text"></p>
        </div>
      </div>
      <div className="card" style={{ width: "1rem", height:"8rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Total Delivered</h5>
          <p className="card-text"></p>
        </div>
      </div>
      <div className="card" style={{ width: "1rem", height:"8rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">  Total Cancelled</h5>
        </div>
      </div>
      <div className="card" style={{ width: "1rem", height:"8rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Total Reveneue</h5>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", height:"8rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> Net Profit
          <p>$6759.25</p></h5>
        </div>
      </div>

   
      
    </div>
  );
};

export default Overview;
