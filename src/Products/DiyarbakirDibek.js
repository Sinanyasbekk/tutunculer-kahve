import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/products.css";
import Header from "../Header";
import d1 from "../Images/d1.png";
import d2 from "../Images/d2.png";
import d3 from "../Images/d3.png";
import d4 from "../Images/d4.png";
import dd1 from "../Images/dd1.png";
import dd2 from "../Images/dd2.png";
import dd3 from "../Images/dd3.png";
import dd4 from "../Images/dd4.png";

const DiyarbakirDibek = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const products = [
    {
      id: 1,
      name: "Diyarbakır Dibek",
      category: "Dibek Kahvesi Oturan Poşet",
      images: [d1, d1],
    },
    {
      id: 2,
      name: "Diyarbakır Dibek",
      category: "Menengiç Kahvesi",
      images: [d2, d2],
    },
    {
      id: 3,
      name: "Diyarbakır Dibek",
      category: "Fındık Parçacıklı Dibek Kahvesi",
      images: [d3, d3],
    },
    {
      id: 4,
      name: "Diyarbakır Dibek",
      category: "Antep Fıstığı Parçacıklı Dibek Kahvesi",
      images: [d4, d4],
    },
    {
      id: 5,
      name: "Diyarbakır Dibek",
      category: "Dibek Kahvesi Silindir Paket",
      images: [dd1, dd1],
    },
    {
      id: 6,
      name: "Diyarbakır Dibek",
      category: "Menengiç Kahvesi Silindir Paket",
      images: [dd2, dd2],
    },
    {
      id: 7,
      name: "Diyarbakır Dibek",
      category: "Fındık Parçacıklı Dibek Kahvesi Silindir Paket",
      images: [dd3, dd3],
    },
    {
      id: 8,
      name: "Diyarbakır Dibek",
      category: "Damla Sakızlı Dibek Kahvesi Silindir Paket",
      images: [dd4, dd4],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="products-container">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="ibox">
              <div className="ibox-content product-box">
                <Slider {...settings}>
                  {product.images.map((image, index) => (
                    <div key={index} className="product-image">
                      <img
                        src={image}
                        alt={product.name}
                        className="product-img"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="product-desc">
                  <a href="#" className="product-name">
                    {product.name}
                  </a>
                  <small className="text-muted">{product.category}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiyarbakirDibek;
