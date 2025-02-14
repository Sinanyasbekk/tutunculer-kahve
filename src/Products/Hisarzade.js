import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/products.css";
import Header from "../Header";
import h1 from "../Images/h1.jpeg";
import h2 from "../Images/h2.jpeg";
import h3 from "../Images/h3.jpeg";
import h4 from "../Images/h4.png";

const Hisarzade = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const products = [
    {
      id: 1,
      name: "Hisarzade",
      category: "Hisarzade Kahve Kreması",
      images: [h1, h1],
    },
    {
      id: 2,
      name: "Hisarzade",
      category: "Hisarzade Gold Kahve",
      images: [h2, h2],
    },
    {
      id: 3,
      name: "Hisarzade",
      category: "Hisarzade Türk Kahvesi",
      images: [h3, h3],
    },
    {
      id: 4,
      name: "Hisarzade",
      category: "Hisarzade Menengiç Kahvesi",
      images: [h4, h4],
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
                    <div
                      key={index}
                      className="product-image"
                      onClick={() => openModal(product.images)}
                    >
                      <img
                        src={image}
                        alt={product.name}
                        className="product-img"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="product-desc">
                  <span className="product-price">{product.price}</span>
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
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            <Slider {...settings}>
              {selectedImages.map((image, index) => (
                <div key={index} className="modal-image">
                  <img src={image} alt="Product" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hisarzade;
