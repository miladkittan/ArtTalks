import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PictureCard.css';

function PictureCard({ picture }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/picture/${picture.id}`);
  };

  return (
    <div className="picture-card" onClick={handleClick}>
      <img src={picture.imageUrl} alt={picture.name} className="picture-image" />
      <h3 className="picture-name">{picture.name}</h3>
      <p className="picture-artist">{picture.artist}</p>
      <p className="picture-description">{picture.description}</p>
    </div>
  );
}

export default PictureCard;
