import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home.jsx';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    // </Routes>
    <div>
      {<Home />}
    </div>
  );
}

export default App;
