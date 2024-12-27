import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/antepdibek.css";
import Header from "../Header";
import d1 from "../Images/d1.png";
import d2 from "../Images/d2.png";
import d3 from "../Images/d3.png";
import d4 from "../Images/d4.png";
import dd1 from "../Images/dd1.png";
import dd2 from "../Images/dd2.png";
import dd3 from "../Images/dd3.png";
import dd4 from "../Images/dd4.png";

const AntepDibek = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Diyarbakır Dibek",
      price: "$10",
      category: "Dibek Kahvesi Oturan Poşet",
      imageUrl: d1,
    },
    {
      id: 2,
      name: "Diyarbakır Dibek",
      category: "Menengiç Kahvesi",
      price: "$15",
      imageUrl: d2,
    },
    {
      id: 3,
      name: "Diyarbakır Dibek",
      price: "$20",
      category: "Fındık Parçacıklı Dibek Kahvesi",
      imageUrl: d3,
    },
    {
      id: 4,
      name: "Diyarbakır Dibek",
      price: "$25",
      category: "Antep Fıstığı Parçacıklı Dibek Kahvesi",
      imageUrl: d4,
    },
    {
      id: 5,
      name: "Diyarbakır Dibek",
      price: "$30",
      category: "Dibek Kahvesi Silindir Paket",
      imageUrl: dd1,
    },
    {
      id: 6,
      name: "Diyarbakır Dibek",
      price: "$35",
      category: "Menengiç Kahvesi Silindir Paket",
      imageUrl: dd2,
    },
    {
      id: 7,
      name: "Diyarbakır Dibek",
      price: "$40",
      category: "Fındık Parçacıklı Dibek Kahvesi Silindir Paket",
      imageUrl: dd3,
    },
    {
      id: 8,
      name: "Diyarbakır Dibek",
      price: "$45",
      category: "Damla Sakızlı Dibek Kahvesi Silindir Paket",
      imageUrl: dd4,
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
                <div className="product-image">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-img"
                  />
                </div>
                <div className="product-desc">
                  <span className="product-price">{product.price}</span>

                  <a href="#" className="product-name">
                    {product.name}
                  </a>
                  <small className="text-muted">{product.category}</small>
                  <div className="m-t text-righ">
                    <a
                      href="#"
                      className="btn btn-xs btn-outline btn-primary"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      Info <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
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
