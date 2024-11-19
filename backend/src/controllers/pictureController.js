const { getFilteredPictures, getAllPictures, getPictureById } = require('../services/pictureService');

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

exports.getPictureById = (req, res) => {
  const pictureId = parseInt(req.params.id);
  const picture = getPictureById(pictureId);

  if (picture) {
    res.json(picture);
  } else {
    res.status(404).json({ message: 'Picture not found' });
  }
};
