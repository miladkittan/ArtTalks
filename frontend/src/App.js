import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import GalleryPage from './pages/GalleryPage';  // Import the GalleryPage component
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes for your app */}
          <Route path="/" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
