// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
import Overview from './Overview';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Overview />
      <ActivityChart />
      <RecentOrders />
      
    </div>
  );
};

export default Dashboard;
