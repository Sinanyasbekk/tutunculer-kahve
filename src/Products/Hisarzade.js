import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/antepdibek.css";
import Header from "../Header";
import h1 from "../Images/h1.jpeg";
import h2 from "../Images/h2.jpeg";
import h3 from "../Images/h3.jpeg";
import h4 from "../Images/h4.png";

const Hisarzade = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Hisarzade",
      price: "$10",
      category: "Hisarzade Kahve Kreması",
      imageUrl: h1,
    },
    {
      id: 2,
      name: "Hisarzade",
      category: "Hisarzade Gold Kahve",
      price: "$15",
      imageUrl: h2,
    },
    {
      id: 3,
      name: "Hisarzade",
      price: "$20",
      category: "Hisarzade Türk Kahvesi",
      imageUrl: h3,
    },
    {
      id: 4,
      name: "Hisarzade",
      price: "$25",
      category: "Hisarzade Menengiç Kahvesi",
      imageUrl: h4,
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

export default Hisarzade;
