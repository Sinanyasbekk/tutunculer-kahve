import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/hakkimizda.css";
import Header from "./Header";

const Hakkimizda = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
    </div>
  );
};
export default Hakkimizda;
