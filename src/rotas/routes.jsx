import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorites from '../pages/favorites';
import Home from '../pages/home';

function MainRouts() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default MainRouts;
