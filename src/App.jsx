import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Header from "./Header"; 
import Footer from "./Footer";
import HeaderList from "./HeaderList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('https://webnest.jp/wp-json/wp/v2/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();
  }, []);

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

      {/* 投稿一覧 */}
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>

      {/* フッター */}
      <Footer />
    </div>
  );
}

export default App;