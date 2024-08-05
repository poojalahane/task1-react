// src/components/ActivityChart.js
import React from "react";
import "./ActivityChart.css";

const ActivityChart = () => {
  return (
    <>
    
      <div className="activity-chart">
      <h1>Activity</h1>
        <div className="chart-placeholder image1">
          <img
            src="https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/column-chart-example.svg"
            alt=""
            height="255px"
            width="500px"
          />

          <div className="card" style={{ width: "21rem", height: "10rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
               <h4>Goals</h4>
               <h4>Popular Dishes</h4>
               <h4>Menus</h4>
              </h5>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ActivityChart;
