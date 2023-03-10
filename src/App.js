import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import PostPage from './components/PostPage.js';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(localStorage.getItem("current_post") ? localStorage.getItem("current_post") : '63d6a7dfc301e8d2cb8970cb');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleCurrentPost(post) {
    localStorage.setItem("current_post", post);
    setCurrentPost(post);
  }

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    fetch('https://mraffia-odin-blog-api.up.railway.app/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsError(true);
      });
  }, []);

  return (
    // basename="/odin-blog"
    <HashRouter>
      <div className="container">
        <Nav />

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} handleCurrentPost={handleCurrentPost} isLoading={isLoading} isError={isError} />} />
            <Route path="/post" element={<PostPage currentPost={currentPost} />} />
          </Routes>
        </div>

        <div className="footer">
          <a href="https://github.com/mraffia">
            <strong>mraffia</strong>
            &nbsp;
            <svg aria-hidden="true" className="octicon octicon-mark-github" height="16" width="16" version="1.1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg> 
          </a>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
