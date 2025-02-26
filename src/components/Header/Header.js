import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}><h1 className="navbar__logo">T E A C H  M E</h1></Link>
      <div className="navbar__menu">
        <Link to={"/"}><h2 className="navbar__item">Home</h2></Link>
        <Link to={"/login"}><h2 className="navbar__item navbar-login">Login / Signup</h2></Link>
      </div>
    </nav>
  );
};

export default Header;
