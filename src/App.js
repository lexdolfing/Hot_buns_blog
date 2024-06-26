import './App.css';
import Home from "./pages/home/Home";
import React from 'react';
import NavigationBar from "./components/navigationBar/NavigationBar";
import {Route, Routes} from "react-router-dom";
import BlogPost from "./pages/blogPost/BlogPost";


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogposts/:blogId" element={<BlogPost />} />
          </Routes>
      </>
  );
}

export default App;
