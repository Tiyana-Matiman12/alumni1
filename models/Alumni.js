const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: String,
  email: String,
  graduationYear: Number,
  department: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Alumni', alumniSchema);
