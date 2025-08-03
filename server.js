require("dotenv").config();
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();  

// Servir les fichiers statiques dans /public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(express.json());

// Importer les fichiers nécessaires
const db = require("./src/db");
const routes = require("./src/routes");
const seedDatabase = require("./src/seed");


// Utilisation des routes API
app.use("/api", routes);

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Une erreur est survenue !" });
});

// Connexion à la base et lancement du serveur
db.connectToDatabase()
  .then(async () => {
    await seedDatabase(); // si nécessaire
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB :", err.message);
    process.exit(1);
  });
