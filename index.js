const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI; // Read the URI from the environment variable

const db = mongoose.connection;

// Add a connection event listener
db.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connect(MONGODB_URI);
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/', require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
