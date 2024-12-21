import React from "react";
import "./asdfg.css";
import { useNavigate } from "react-router-dom";

const DiyarbakirDibek = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Tütüncüler Kahve" />
        </div>
        <ul className="nav-menu">
          <li>
            <a href="/">Ana Sayfa</a>
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
            <a href="/hakkimizda">Hakkımızda</a>
          </li>
          <li>
            <a href="/bize-ulasin">Bize Ulaşın</a>
          </li>
        </ul>
        <div className="nav-icons">
          <ul>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-basket"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <h1>Ürünlerimiz</h1>
        <div className="product-grid">
          <div className="product-card">
            <img src="1.png" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Dibek Kahvesi Oturan Poşet</p>
          </div>

          <div className="product-card">
            <img src="3.png" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Findik Parcacikli Dibek Kahvesi</p>
          </div>

          <div className="product-card">
            <img src="2.png" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Menengic Kahvesi</p>
          </div>

          <div className="product-card">
            <img src="7.png" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Fistik Parcacikli Dibek Kahvesi</p>
          </div>

          <div className="product-card">
            <img src="dsilindir_dib.jpeg" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Dibek Kahvesi Silindir Paket</p>
          </div>

          <div className="product-card">
            <img src="dsilindir_fin.jpeg" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Findik Parcacikli Dibek Kahvesi Silindir Paket</p>
          </div>

          <div className="product-card">
            <img src="dsilindir_men.jpeg" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Menengic Kahvesi Silindir Paket</p>
          </div>

          <div className="product-card">
            <img src="dsilindir_dab.jpeg" alt="Product Image" />
            <h2>Diyarbakir Dibek</h2>
            <p>Damla Sakizli Dibek Kahvesi Silindir Paket</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiyarbakirDibek;
