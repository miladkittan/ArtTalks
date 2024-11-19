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

module.exports = { getFilteredPictures, getAllPictures };
