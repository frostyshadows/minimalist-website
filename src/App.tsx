import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Art from "./pages/art";
import Contact from "./pages/contact";
import Fiction from "./pages/fiction";
import Home from "./pages/home";
import Inspiration from "./pages/inspiration";
import Tech from "./pages/tech";

function App() {

  return (
    <Router>
      <div className="App" id="scroll">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/art" element={<Art />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;