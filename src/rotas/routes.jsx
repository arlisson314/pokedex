import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

function MainRouts() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MainRouts;
