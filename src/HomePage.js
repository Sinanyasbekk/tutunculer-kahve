import React from "react";
import Header from "./Header"; // Standard import
import { Link } from "react-router-dom"; // Replace next/link
import "./Styles/HomePage.css";
import "./Styles/Footer.css";
import antdibek from "./Images/antdibek.png";
import moduleName from "module";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <main>
        {/* Gaziantep Section */}
        <section className="section" style={{ backgroundColor: "#ff7f6e" }}>
          <div className="container">
            <div className="flex-container">
              <div className="image-container">
                <img
                  src="/placeholder.svg"
                  alt="Drink Image 1"
                  width={200}
                  height={200}
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
              <div className="content-container">
                <h1 className="title">Bir Gaziantep Markasıdır</h1>
                <p className="subtitle">Gaziantep'in Eşsiz Lezzeti.</p>
                <button className="button">Hemen Sipariş Ver</button>
              </div>
            </div>
          </div>
        </section>

        {/* Diyarbakir Section */}
        <section className="section" style={{ backgroundColor: "#90EE90" }}>
          <div className="container">
            <div className="flex-container">
              <div className="content-container left">
                <h1 className="title">Bir Diyarbakır Markasıdır</h1>
                <p className="subtitle">Diyarbakir'in Eşsiz Lezzeti.</p>
                <button className="button">Hemen Sipariş Ver</button>
              </div>
              <div className="image-container">
                <img
                  src={antdibek}
                  alt="Drink Image 2"
                  width={200}
                  height={200}
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="copyright">
            <p>Tüm hakları saklıdır. © 2012–2024 Tütüncüler Kahve</p>
          </div>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Bültene kaydolun"
              className="input"
            />
            <button className="button" style={{ backgroundColor: "#90EE90" }}>
              Kaydol
            </button>
          </div>

          <div className="footer-links">
            <Link to="/privacy" className="footer-link">
              Kişisel Verilerin Korunması
            </Link>
            <Link to="/hr" className="footer-link">
              İnsan Kaynakları
            </Link>
          </div>
        </div>

        {/* Cookie Consent Banner */}
        <div className="cookie-banner">
          <div className="cookie-container">
            <p>
              Web sitemiz, en iyi deneyimi sunmak için çerezler kullanmaktadır.{" "}
              <Link
                to="/privacy"
                style={{ color: "#90EE90", textDecoration: "underline" }}
              >
                Daha fazla bilgi
              </Link>
            </p>
            <div className="cookie-buttons">
              <button
                className="button"
                style={{ backgroundColor: "#90EE90", color: "black" }}
              >
                Kabul Et
              </button>
              <button
                className="button"
                style={{ borderColor: "white", color: "white" }}
              >
                Reddet
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
