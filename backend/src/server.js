const express = require('express');
const cors = require('cors');
const path = require('path');
const pictureRoutes = require('./routes/pictureRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', pictureRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
