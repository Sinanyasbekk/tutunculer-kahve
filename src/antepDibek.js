import React from "react";
import { useNavigate } from "react-router-dom";
import "./asdfg.css";

const AntepDibek = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
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
                <a href="/AntepDibek.js">Antep Dibek</a>
              </li>
              <li>
                <a href="/DiyarbakirDibek">Diyarbakır Dibek</a>
              </li>
              <li>
                <a href="/Hisarzade">Hisarzade</a>
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

      {/* Main Content for Product Grid */}
      <main>
        <h1>Ürünlerimiz</h1>
        <div className="product-grid">
          {[
            {
              img: "4.png",
              title: "Antep Dibek",
              desc: "Dibek Kahvesi Oturan Poşet",
            },
            {
              img: "5.png",
              title: "Antep Dibek",
              desc: "Fındık Parçacıklı Dibek Kahvesi",
            },
            { img: "6.png", title: "Antep Dibek", desc: "Menengiç Kahvesi" },
            {
              img: "7.png",
              title: "Antep Dibek",
              desc: "Fıstık Parçacıklı Dibek Kahvesi",
            },
            {
              img: "silindir_dib.jpeg",
              title: "Antep Dibek",
              desc: "Dibek Kahvesi Silindir Paket",
            },
            {
              img: "silindir_fist.jpeg",
              title: "Antep Dibek",
              desc: "Fıstık Parçacıklı Dibek Kahvesi Silindir Paket",
            },
            {
              img: "silindir_men.jpeg",
              title: "Antep Dibek",
              desc: "Menengiç Kahvesi Silindir Paket",
            },
            {
              img: "silindir_find.jpeg",
              title: "Antep Dibek",
              desc: "Fındık Parçacıklı Dibek Kahvesi Silindir Paket",
            },
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default AntepDibek;
