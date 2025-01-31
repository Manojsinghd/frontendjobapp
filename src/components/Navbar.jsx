
import React from "react";

const Navbar = ({ openLogin, openRegister }) => {
  return (
    <nav className="navbar">
      {/* Left Side - Logo & Name */}
      <div className="logo">
        <img src="/logo.png" alt="App Logo" className="logo-img" />
        <span className="app-name">JobConnect</span>
      </div>

      {/* Center Links */}
      <div className="nav-links">
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <a href="#">Services</a>
      </div>

      {/* Right Side - Buttons & Dropdown */}
      <div className="nav-actions">
        <button className="login-btn" onClick={openLogin}>Login</button> {/* Trigger Login Modal */}
        <button className="register-btn" onClick={openRegister}>Register</button> {/* Trigger Register Modal */}
        <div className="dropdown">
          <span>For Employers ▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
