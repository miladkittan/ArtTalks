const { getFilteredPictures, getAllPictures } = require('../services/pictureService'); 

exports.getPictures = (req, res) => {
  const searchTerm = req.query.search || '';

  let filteredPictures;

  if (searchTerm) {
    filteredPictures = getFilteredPictures(searchTerm);
  } else {
    filteredPictures = getAllPictures();
  }

  res.json(filteredPictures);
};
