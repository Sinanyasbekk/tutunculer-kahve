import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "../Styles/products.css";
import Header from "../Header";
import a1 from "../Images/a1.png";
import a2 from "../Images/a2.png";
import a3 from "../Images/a3.png";
import a4 from "../Images/a4.png";
import aa1 from "../Images/aa1.png";
import aa2 from "../Images/aa2.png";
import aa3 from "../Images/aa3.png";
import aa4 from "../Images/aa4.png";

const AntepDibek = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Sample product data with images
  const products = [
    {
      id: 1,
      name: "Antep Dibek",
      category: "Menengiç Kahvesi",
      images: [a1, a1],
    },
    {
      id: 2,
      name: "Antep Dibek",
      category: "Fındık Parçacıklı Dibek Kahvesi",
      images: [a2, a2],
    },
    {
      id: 3,
      name: "Antep Dibek",
      category: "Antep Fıstığı Parçacıklı Dibek Kahvesi",
      images: [a3, a3],
    },
    {
      id: 4,
      name: "Antep Dibek",
      category: "Dibek Kahvesi Oturan Poşet",
      images: [a4, a4],
    },
    {
      id: 5,
      name: "Antep Dibek",
      category: "Dibek Kahvesi Oturan Poşet",
      images: [aa1, aa1],
    },
    {
      id: 6,
      name: "Antep Dibek",
      category: "Dibek Kahvesi Oturan Poşet",
      images: [aa2, aa2],
    },
    {
      id: 7,
      name: "Antep Dibek",
      category: "Dibek Kahvesi Oturan Poşet",
      images: [aa3, aa3],
    },
    {
      id: 8,
      name: "Antep Dibek",
      category: "Dibek Kahvesi Oturan Poşet",
      images: [aa4, aa4],
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

export default AntepDibek;
