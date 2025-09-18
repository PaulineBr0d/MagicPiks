require("dotenv").config();
const express = require("express"); 
const router = express.Router();
const Data = require("./data");
const isAdminLoggedIn = require('./isAdminLoggedIn');


// Ajouter une entrée
router.post("/", isAdminLoggedIn, async (req, res) => {
  try {
    const newRando = new Data(req.body);
    await newRando.save();

    // Déclencher la GitHub Action après ajout
    try {
      await triggerGitHubAction();
      console.log('GitHub Action déclenchée après ajout de rando');
    } catch (err) {
      console.error('GitHub Action non déclenchée :', err.message);
      // On n'interrompt pas la réponse pour l'admin
    }

    res.status(201).json({ message: 'Randonnée ajoutée avec succès' });
  } catch (err) {
    console.error('Erreur lors de l\'ajout :', err.message);
    res.status(500).json({ error: 'Erreur serveur lors de l\'ajout' });
  }
});

// Obtenir toutes les entrées
router.get("/", async (req, res) => {
  try {
    const entries = await Data.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtenir une entrée par ID
router.get("/:id", async (req, res) => {
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


async function triggerGitHubAction() {
  const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/actions/workflows/update-data-json.yml/dispatches`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ref: 'main'  
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur déclenchement GitHub Action : ${response.status} ${errorText}`);
  }

  console.log('GitHub Action déclenchée avec succès.');
}