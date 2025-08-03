const express = require("express");
const router = express.Router();
const Data = require("./data");

// Ajouter une entrée
router.post("/data", async (req, res) => {
  try {
    const newEntry = new Data(req.body);
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtenir toutes les entrées
router.get("/data", async (req, res) => {
  try {
    const entries = await Data.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Obtenir une entrée par ID
router.get("/data/:id", async (req, res) => {
  try {
    const entry = await Data.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: "Entrée non trouvée" });
    }
    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

