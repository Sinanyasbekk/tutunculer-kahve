import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import "./Styles/Header.css";
import logo from "./Images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="social-links">
        <a
          href="https://www.instagram.com/tutunculerkahve/?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a
          href="https://g.co/kgs/PvDN6KA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt />
        </a>
      </div>

      <div className="main-nav">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Tütüncüler Kahve Logo" />
          </Link>

          <nav className="nav-links">
            <div onClick={() => navigate("/")}>ANA SAYFA</div>

            <div className="dropdown">
              <Link to="/Products">ÜRÜNLERİMİZ</Link>
              <div className="dropdown-content">
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/AntepDibek")}
                >
                  Antep Dibek
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/DiyarbakirDibek")}
                >
                  Diyarbakır Dibek
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => navigate("/Hisarzade")}
                >
                  Hisarzade
                </div>
              </div>
            </div>

            <Link to="/Hakkimizda">HAKKIMIZDA</Link>
            <Link to="/BizeUlasin">BİZE ULAŞIN</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
