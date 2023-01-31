import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-title-link">
        <div className="nav-title">Odin Blog</div>
      </Link>
    </nav>
  );
}

export default Nav;