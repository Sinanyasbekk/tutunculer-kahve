import React from "react";
import Header from "./Header"; // Standard import
import { Link } from "react-router-dom"; // Replace next/link
import "./Styles/HomePage.css";
import "./Styles/Footer.css";
import antdibek from "./Images/antdibek.png";
import dbakirdibek from "./Images/dbakirdibek.png";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <main>
        {/* Gaziantep Section */}
        <section className="section">
          <div className="container">
            <div className="flex-container">
              <div className="image-container">
                <img
                  src={antdibek}
                  alt="Drink Image 1"
                  width={200}
                  height={200}
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
              <div className="content-container">
                <h1 className="title">Bir Gaziantep Markasıdır</h1>
                <p className="subtitle">Gaziantep'in Eşsiz Lezzeti.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gaziantep Section */}
        <section className="section">
          <div className="container">
            <div className="flex-container">
              <div className="content-container left">
                <h1 className="title">Bir Gaziantep Markasıdır</h1>
                <p className="subtitle">Gaziantep'in Eşsiz Lezzeti.</p>
              </div>
              <div className="image-container">
                <img
                  src={antdibek}
                  alt="Drink Image 1"
                  width={200}
                  height={200}
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Diyarbakir Section */}
        <section className="section">
          <div className="container">
            <div className="flex-container">
              <div className="image-container">
                <img
                  src={dbakirdibek}
                  alt="Drink Image 2"
                  width={200}
                  height={200}
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
              <div className="content-container">
                <h1 className="title">Bir Diyarbakır Markasıdır</h1>
                <p className="subtitle">Diyarbakir'in Eşsiz Lezzeti.</p>
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
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
