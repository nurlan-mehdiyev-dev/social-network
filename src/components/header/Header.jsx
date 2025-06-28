import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">metafans</div>

      <div className="search-bar">
        <input type="text" placeholder="Search community" />
      </div>

      <nav className="nav-links">
        <a href="#">Activity</a>
        <a href="#">Streams</a>
        <a href="#">Events</a>
        <a href="#">Groups</a>
        <a href="#">Pages</a>
      </nav>

      <div className="header-icons">
        <span>🔔</span>
        <span>⚙️</span>
        <img src="https://i.pravatar.cc/30" alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
};

export default Header;
