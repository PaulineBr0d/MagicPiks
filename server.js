require("dotenv").config();
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();  


// Configuration de la session dans Express
const session = require('express-session');

// Middleware
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5500",
      "http://127.0.0.1:5500",
      "https://paulinebr0d.github.io"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Origine non autorisée :", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Active CORS pour toutes les routes
app.use(cors(corsOptions));


app.set("trust proxy", 1);


const isProduction = process.env.NODE_ENV === "production";

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: isProduction, // true uniquement en production
    httpOnly: true,
    sameSite: isProduction ? 'none' : 'lax' // 'lax' en dev pour éviter les problèmes CORS
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


db.connectToDatabase()
  .then(() => {
    console.log("Connexion à la base réussie");
    
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
      });
    })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB :", err.message);
    process.exit(1);
  });
