import './App.css';
import Home from "./pages/Home/Home";
import React from 'react';
import NavigationBar from "./components/NavigationBar/NavigationBar";
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
