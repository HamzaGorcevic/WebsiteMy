import React from "react";

import './web.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Card from "./Card";  
import Login from "./Login";
import Register from "./Register";


export default function WebsiteMain() {

    
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Card />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
    
    
    );
  }
  
  