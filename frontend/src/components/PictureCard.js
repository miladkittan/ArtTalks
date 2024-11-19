import React from 'react';
import './PictureCard.css';

function PictureCard({ picture }) {
  return (
    <div className="picture-card">
      <img src={picture.imageUrl} alt={picture.name} className="picture-image" />
      <h3 className="picture-name">{picture.name}</h3>
      <p className="picture-artist">{picture.artist}</p>
      <p className="picture-description">{picture.description}</p>
    </div>
  );
}

export default PictureCard;
