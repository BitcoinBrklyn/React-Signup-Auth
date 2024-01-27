// import './App.css'
import Square from "./componets/Square";
import Home from "./componets/Home";
import Login from "./componets/Login";
import Signup from "./componets/Signup";
import { Playcode } from "./componets/Playcode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Playcode" element={<Playcode />} />
          <Route path="/Square" element={<Square />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
