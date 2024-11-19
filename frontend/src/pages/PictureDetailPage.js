import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPictures } from '../services/api';
import ChatBox from '../components/ChatBox';
import './PictureDetailPage.css';

function PictureDetailPage() {
  const { id } = useParams();
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPicture = async () => {
      setLoading(true);
      setError(null);

      try {
        const pictures = await fetchPictures();
        const foundPicture = pictures.find(picture => picture.id === parseInt(id));
        setPicture(foundPicture);
      } catch (error) {
        setError('Failed to load picture details');
        console.error('Error fetching picture:', error);
      } finally {
        setLoading(false);
      }
    };

    getPicture();
  }, [id]);

  return (
    <div className="picture-detail-page">
      {loading && <div>Loading picture details...</div>}
      {error && <div className="error-message">{error}</div>}
      {picture && (
        <div className="picture-detail-container">
          <h2>{picture.name}</h2>
          <p>By {picture.artist}</p>
          <img src={picture.imageUrl} alt={picture.name} className="picture-image" />
        </div>
      )}
      <ChatBox />
    </div>
  );
}

export default PictureDetailPage;
