import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

import Home from "./pages/home/Home";
import Sug from "./pages/sug/sug";
//import Politicians from './pages/politicians/Politicians'
//import Complaint from './pages/complaint/Complaint'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sug-officers" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
