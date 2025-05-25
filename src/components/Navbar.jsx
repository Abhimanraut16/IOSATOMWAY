import React, { useState } from 'react';
import { Link } from 'react-router';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div>
      <nav>
        <div className="nav__container">
          <Link to="/" title="Home">
            <h3>IOSAT</h3>
          </Link>

          <ul className={`nav_menu ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Menu toggle buttons */}
          <button id="open-menu-btn" onClick={handleMenuToggle}>
            <i className={`uil ${menuOpen ? 'uil-multiply' : 'uil-bars'}`}></i>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
