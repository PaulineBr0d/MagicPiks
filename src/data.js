const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  difficulty: { type: String, required: true },
  interest: { type: String, required: true },
  tags: { type: [String], required: true },
  description: { type: String, required: true },
  url: { type: String }, // facultatif
  images: [String] // facultatif
});

module.exports = mongoose.models.Data || mongoose.model('Data', dataSchema);
