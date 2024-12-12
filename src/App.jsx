import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';


import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Header from "./Header"; // 既存のヘッダー
import Footer from "./Footer"; // フッター

import HeaderList from "./HeaderList";

function App() {
  const [isHovered, setIsHovered] = useState(false);



  return (
    <div>
      {/* ヘッダー */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/headerlist" element={<HeaderList />} />
        </Routes>
      </BrowserRouter>

     

      
      
      {/* フッター */}
      <Footer />
    </div>
  );
}

export default App;
