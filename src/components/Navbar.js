import React from "react";
import "../App.css";
import { FaHome, FaChartBar, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (

    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h1>#.</h1><FaHome className="nav-icon" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </a>
        </li>
        <FaHome className="nav-icon" />
      <FaShoppingCart className="nav-icon" />
      <FaUser className="nav-icon" />
      </ul>
     
      <FaHome className="nav-icon" />
      <FaShoppingCart className="nav-icon" />
      <FaUser className="nav-icon" />
    </div>
  </div>
</nav>

    </>
    // <div className="navbar">
      // <FaHome className="nav-icon" />
      // <FaShoppingCart className="nav-icon" />
      // <FaUser className="nav-icon" />
    // </div>
  );
};

export default Navbar;
