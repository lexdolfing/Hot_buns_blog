import './App.css';
import Home from "./pages/home/Home";
import React from 'react';
import NavigationBar from "./components/navigationBar/NavigationBar";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </>
  );
}

export default App;
