import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from './components/Nav.js';
// import HomePage from './components/HomePage.js';
// import PostPage from './components/PostPage.js';
import './App.css';

function App() {
  return (
    // basename="/odin-blog"
    <BrowserRouter>
      <div className="container">
        {/* <Nav /> */}

        <div className="content">
          <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<PostPage />} /> */}
          </Routes>
        </div>

        <div className="footer">
          <a href="https://github.com/mraffia"><strong>mraffia</strong>&nbsp;<i class="fa fa-github" style={{ "font-size": "18px" }}></i> </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
