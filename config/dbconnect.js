// config/db.js

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ok:Investment44@uganda.j42sgkx.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', err => {
  console.error(err);
});

module.exports = mongoose;