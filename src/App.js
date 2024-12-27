import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AntepDibek from "./Products/AntepDibek";
import DiyarbakirDibek from "./Products/DiyarbakirDibek";
import Hisarzade from "./Products/Hisarzade";
import Header from "./Header";
import Hakkimizda from "./Hakkimizda";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AntepDibek" element={<AntepDibek />} />
          <Route path="/DiyarbakirDibek" element={<DiyarbakirDibek />} />
          <Route path="/Hisarzade" element={<Hisarzade />} />
          <Route path="/Hakkimizda" element={<Hakkimizda />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
