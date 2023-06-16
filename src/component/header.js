import React from 'react';
import Logo from '../asset/logo.png';

import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" className="imgLogo" />
      </div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/skill">
          <li>Skill</li>
        </Link>
        <Link to="/education">
          <li>Project</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
