const fs = require('fs');
const path = require('path');

const picturesFilePath = path.join(__dirname, '../data/pictures.json'); // Adjust path to the correct location

let pictures = JSON.parse(fs.readFileSync(picturesFilePath, 'utf8'));

const getPictures = (searchTerm = '') => {
  return pictures.filter(picture =>
    picture.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    picture.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

module.exports = { pictures, getPictures };
