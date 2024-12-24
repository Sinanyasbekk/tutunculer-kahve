import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Header.css";

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
            TÜTÜNCÜLER KAHVE
          </Link>

          {/* Navigation items */}
          <nav className="nav-links">
            <Link to="/anasayfa">ANASAYFA</Link>
            <Link to="/kahve-ve-biz">ÜRÜNLERİMİZ</Link>
            <Link to="/menu">ÜRÜN KATALOĞU</Link>
            <Link to="/online-magaza">HAKKIMIZDA</Link>
            <Link to="/kesfet">BİZE ULAŞIN</Link>
          </nav>
        </div>
      </div>
      {/* Hero section with background image */}
      <div className="hero">
        <img
          width={100}
          height={100}
          alt="Coffee with latte art"
          className="hero-image"
        />
      </div>
    </header>
  );
};

export default Header;
