import React, { useState, useEffect } from 'react';
import PictureCard from '../components/PictureCard';
import { fetchPictures } from '../services/api';
import './GalleryPage.css';

function GalleryPage() {
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPictures = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedPictures = await fetchPictures(searchTerm);
        setPictures(fetchedPictures);
      } catch (error) {
        setError('Failed to load pictures. Please try again later.'); 
        console.error('Error fetching pictures:', error);
      } finally {
        setLoading(false);
      }
    };

    getPictures();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Art Talks</h1>
        <input
          type="text"
          placeholder="Search by name or artist..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </header>

      {error && <div className="error-message">{error}</div>}

      {loading && <div className="loading-message">Loading pictures...</div>}

      <div className="gallery-container">
        {pictures.length > 0 ? (
          pictures.map(picture => (
            <PictureCard key={picture.id} picture={picture} />
          ))
        ) : (
          !loading && <p>No pictures found.</p>
        )}
      </div>
    </div>
  );
}

export default GalleryPage;
