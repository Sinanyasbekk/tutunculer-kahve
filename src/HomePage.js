import React from "react";
import { useNavigate } from "react-router-dom";
import "./asdfg.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Tütüncüler Kahve" />
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#">Ana Sayfa</a>
          </li>
          <li className="dropdown">
            <a href="#">Ürünlerimiz</a>
            <ul className="dropdown-content">
              <li>
                <div
                  className="AntepDibek"
                  onClick={() => navigate("/AntepDibek")}
                >
                  Antep Dibek
                </div>
              </li>
              <li>
                <div
                  className="DiyarbakirDibek"
                  onClick={() => navigate("/DiyarbakirDibek")}
                >
                  Diyarbakır Dibek
                </div>
              </li>
              <li>
                <div
                  className="Hisarzade"
                  onClick={() => navigate("/Hisaarzade")}
                >
                  Hisarzade
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a href="urun_katalogu.pdf" target="_blank">
              Ürün Kataloğu
            </a>
          </li>
          <li>
            <a href="/hakkimizda.html">Hakkımızda</a>
          </li>
          <li>
            <a href="/bize-ulasin.html">Bize Ulaşın</a>
          </li>
        </ul>
        <div className="nav-icons">
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-person-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-basket"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Sections */}
      <div className="genelbar">
        <div className="firstbar">
          <div className="image-container">
            <img src="antdibek.png" alt="Drink Image 1" className="block" />
          </div>
          <div className="text1">
            <div className="content-block">
              <h1 className="heading-text" tabindex="-1">
                <span className="rich-text">Bir Gaziantep Markasıdır</span>
              </h1>
              <div className="sub-heading-text">
                Gaziantep'in Eşsiz Lezzeti.
              </div>
              <a className="order-button" href="/AntepDibek.js">
                Hemen Sipariş Ver
              </a>
            </div>
          </div>
        </div>

        <div className="secondbar">
          <div className="image-container">
            <img src="dbakirdibek.png" alt="Drink Image 2" className="block" />
          </div>
          <div className="text1">
            <div className="content-block">
              <h1 className="heading-text" tabindex="-1">
                <span className="rich-text">Bir Diyarbakır Markasıdır</span>
              </h1>
              <div className="sub-heading-text">
                Diyarbakır'ın Eşsiz Lezzeti.
              </div>
              <a className="order-button" href="/diyarbakir-dibek.html">
                Hemen Sipariş Ver
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Bar */}
      <div className="cookie-bar" id="cookie-bar">
        <p>
          Web sitemiz, en iyi deneyimi sunmak için çerezler kullanmaktadır.
          <a href="#" className="cookie-link">
            Daha fazla bilgi
          </a>
        </p>
        <button className="cookie-accept" onClick="{acceptCookies}">
          Kabul Et
        </button>
        <button className="cookie-reject" onClick="{rejectCookies}">
          Reddet
        </button>
      </div>

      {/* Footer */}
      <footer>
        <p>Tüm hakları saklıdır. © 2012–2024 Tütüncüler Kahve</p>
        <form id="subscription" method="POST">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Bültene kaydolun"
            required
          />
          <input type="submit" name="submit" value="Kaydol" />
        </form>
        <ul className="footer-links">
          <li>
            <a href="/kisisel-verilerin-korunmasi">
              Kişisel Verilerin Korunması
            </a>
          </li>
          <li>
            <a href="/insan-kaynaklari">İnsan Kaynakları</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
