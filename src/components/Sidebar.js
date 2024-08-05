// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faBox, faComment, faBell,faTags,faUsers,
  faUser,
  faQuestionCircle,
  faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo"><FontAwesomeIcon icon={faUsers} className="icon" /></div>
      <nav>
        <ul>
        
        <FontAwesomeIcon icon={faHome} className="icon" />
        <FontAwesomeIcon icon={faChartLine} className="icon" />
        <FontAwesomeIcon icon={faBox} className="icon" />
        <FontAwesomeIcon icon={faComment} className="icon" />
        <FontAwesomeIcon icon={faTags} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
