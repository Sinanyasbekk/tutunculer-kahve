import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/HomePage.css";
import "./Styles/Footer.css";
import antdibek from "./Images/antdibek.png";
import dbakirdibek from "./Images/dbakirdibek.png";

// Create the image context before using it
const antepContext = require.context(
  "./Images/antep",
  false,
  /\.(png|jpe?g|svg)$/
);
const diyarbakirContext = require.context(
  "./Images/diyarbakir",
  false,
  /\.(png|jpe?g|svg)$/
);
const hisarzadeContext = require.context(
  "./Images/hisarzade",
  false,
  /\.(png|jpe?g|svg)$/
);

// Import all images dynamically
const importAll = (context) => {
  const images = {};
  context.keys().forEach((key) => {
    const imageName = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "");
    images[imageName] = context(key);
  });
  return images;
};

// Create product arrays
const antepImages = importAll(antepContext);
const diyarbakirImages = importAll(diyarbakirContext);
const hisarzadeImages = importAll(hisarzadeContext);

const antepProducts = Object.keys(antepImages).map((key) => ({
  image: antepImages[key],
}));

const diyarbakirProducts = Object.keys(diyarbakirImages).map((key) => ({
  image: diyarbakirImages[key],
}));

const hisarzadeProducts = Object.keys(hisarzadeImages).map((key) => ({
  image: hisarzadeImages[key],
}));

const HomePage = () => {
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main style={{ backgroundColor: "#ffe4c4" }}>
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
              </div>
            </div>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {antepProducts.map((product, index) => (
                  <div key={index} className="carousel-item">
                    <img src={product.image} alt={product.name} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

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
              <div className="content-container left">
                <h1 className="title">Bir Gaziantep Markasıdır</h1>
              </div>
            </div>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {diyarbakirProducts.map((product, index) => (
                  <div key={index} className="carousel-item">
                    <img src={product.image} alt={product.name} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

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
              </div>
            </div>
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {hisarzadeProducts.map((product, index) => (
                  <div key={index} className="carousel-item">
                    <img src={product.image} alt={product.name} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </main>

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
