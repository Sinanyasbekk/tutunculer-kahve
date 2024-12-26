import React from "react";
import { Link } from "react-router-dom";

import "./Styles/Header.css";
import logo from "./Images/logo.png";
// import AntepDibek from "./Products/AntepDibek";
// import DiyarbakirDibek from "./Products/DiyarbakirDibek";
// import Hisarzade from "./Products/Hisarzade";

const Header = () => {
  return (
    <header className="header">
      {/* Language selector */}
      <div className="language-selector">
        <nav>
          <Link to="/tr">TR</Link>
          <span> | </span>
          <Link to="/en">EN</Link>
          <span> | </span>
          <Link to="/ar">AR</Link>
        </nav>
      </div>

      {/* Main navigation */}
      <div className="main-nav">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="Tütüncüler Kahve Logo" />
          </Link>

          {/* Navigation items */}
          <nav className="nav-links">
            <Link to="./HomePage">ANASAYFA</Link>

            {/* Dropdown */}
            <div className="dropdown">
              <Link href="">ÜRÜNLERİMİZ</Link>
              <div className="dropdown-content">
                <Link href="/Products/AntepDibek" className="dropdown-item">
                  Antep Dibek
                </Link>
                <Link
                  href="/Products/DiyarbakirDibek"
                  className="dropdown-item"
                >
                  Diyarbakır Dibek
                </Link>
                <Link href="/Products/Hisarzade" className="dropdown-item">
                  Hisarzade
                </Link>
              </div>
            </div>

            <Link to="/online-magaza">HAKKIMIZDA</Link>
            <Link to="/kesfet">BİZE ULAŞIN</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
