import React from 'react';
import { format } from 'path';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home/Home"
import CampDetail from './pages/CampDetail/CampDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CampDetail" element={<CampDetail/>} />
        <Route path="/CampApply" element={<div></div>} />
        <Route path="/Community" element={<div></div>} />
      </Routes>
    </div>
  );
}

export default App;
