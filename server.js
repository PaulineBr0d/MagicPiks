require("dotenv").config();
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();  

// Configuration de la session dans Express
const session = require('express-session');

// Middleware
app.use(cors({
  origin: "http://localhost:5500", // ou ton domaine frontend
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET, // clé secrète pour signer les cookies
  resave: false,
  saveUninitialized: false,
cookie: { 
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  }
}));

// Servir les fichiers statiques dans /public
app.use(express.static(path.join(__dirname, 'public')));



app.use(express.json());

// Import des routes
const authRoutes = require("./src/auth"); 

const routes = require("./src/routes");

// Montage des routes
app.use("/api/auth", authRoutes);

app.use("/api/data", routes);

app.get('/api/config/cloudinary', (req, res) => {
  res.json({
    cloudName: process.env.CLOUD_NAME,
    uploadPreset: process.env.UPLOAD_PRESET
  });
});


// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Une erreur est survenue !" });
});

// Connexion à la base et lancement du serveur
const db = require("./src/db");
/*const seedDatabase = require("./src/seed");*/

db.connectToDatabase()
  .then(async () => {
    /*await seedDatabase();*/ // si nécessaire
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB :", err.message);
    process.exit(1);
  });