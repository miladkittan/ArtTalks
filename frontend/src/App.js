import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage'; 
import PictureDetailPage from './pages/PictureDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/picture/:id" element={<PictureDetailPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
