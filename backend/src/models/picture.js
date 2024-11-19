const fs = require('fs');
const path = require('path');

const picturesFilePath = path.join(__dirname, '../data/pictures.json');

let pictures = JSON.parse(fs.readFileSync(picturesFilePath, 'utf8'));

const getPictures = (searchTerm = '') => {
  return pictures.filter(picture =>
    picture.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    picture.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const getPictureById = (id) => {
  return pictures.find(picture => picture.id === id);
};

module.exports = { pictures, getPictures, getPictureById };
