import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/antepdibek.css";
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

  // Sample product data with images
  const products = [
    {
      id: 1,
      name: "Antep Dibek",
      price: "$10",
      category: "Menengiç Kahvesi",
      imageUrl: a1, // Replace with your actual image paths
    },
    {
      id: 2,
      name: "Antep Dibek",
      category: "Fındık Parçacıklı Dibek Kahvesi",
      price: "$15",

      imageUrl: a2,
    },
    {
      id: 3,
      name: "Antep Dibek",
      price: "$20",
      category: "Antep Fıstığı Parçacıklı Dibek Kahvesi",
      imageUrl: a3,
    },
    {
      id: 4,
      name: "Antep Dibek",
      price: "$25",
      category: "Dibek Kahvesi Oturan Poşet",
      imageUrl: a4,
    },
    {
      id: 5,
      name: "Antep Dibek",
      price: "$30",
      category: "Menengiç Kahvesi Silindir Paket",
      imageUrl: aa1,
    },
    {
      id: 6,
      name: "Antep Dibek",
      price: "$35",
      category: "Fındık Parçacıklı Dibek Kahvesi Silindir Paket",
      imageUrl: aa2,
    },
    {
      id: 7,
      name: "Antep Dibek",
      price: "$40",
      category: "Antep Fıstığı Parçacıklı Dibek Kahvesi Silindir Paket",
      imageUrl: aa3,
    },
    {
      id: 8,
      name: "Antep Dibek",
      price: "$45",
      category: "Dibek Kahvesi Silindir Paket",
      imageUrl: aa4,
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
