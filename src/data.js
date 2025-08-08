const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    _id: {
    type: String, // ID = slug
    required: true
  },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  difficulty: { type: String, required: true },
  interest: { type: String, required: true },
  tags: { type: [String]}, // facultatif
  description: { type: String, required: true },
  url: { type: String }, // facultatif
  images:  [
  {
    url: { type: String, required: true },
    public_id: { type: String, required: true }
  }
]
});

module.exports = mongoose.models.Data || mongoose.model('Data', dataSchema);
