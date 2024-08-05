// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar/>
     <div className="App">
      
      <Sidebar />
      <Dashboard />
     
    </div>
    </>
 
  );
}

export default App;
