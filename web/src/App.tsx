import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { UTC } from './pages/UTC';
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NavBar } from "./component/Navbar"



function App() {
  return (
    
    <>
      <NavBar />
        <Container>
          <Routes>
            <Route path="/UTC" element={<UTC />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
    </>
  );
}

export default App;
