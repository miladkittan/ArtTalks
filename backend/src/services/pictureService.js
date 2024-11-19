const { pictures } = require('../models/picture');

const getFilteredPictures = (searchTerm = '') => {
  return pictures.filter(picture =>
    picture.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    picture.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const getAllPictures = () => {
  return pictures;
};

const getPictureById = (id) => {
  return pictures.find(picture => picture.id === id);
};

module.exports = { getFilteredPictures, getAllPictures, getPictureById };
