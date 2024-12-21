import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AntepDibek from "./AntepDibek";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AntepDibek" element={<AntepDibek />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
