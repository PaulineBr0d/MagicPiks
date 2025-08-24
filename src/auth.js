const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Admin = require("./admin"); 

// Connexion admin
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({email});

  if (!admin) {
    return res.status(401).json({ message: "Identifiants incorrects" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Mot de passe incorrect" });
  }

  req.session.adminId = admin._id;
  res.json({ message: "Connecté" });
});

// Déconnexion
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Déconnecté" });
  });
});

// Vérifier si connecté
router.get("/check", (req, res) => {
  if (req.session.adminId) {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
});

module.exports = router;