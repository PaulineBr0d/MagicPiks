const fs = require('fs');
const path = require('path');

// Chemin vers le dossier public du frontend
const FRONTEND_PUBLIC_DIR = path.join(__dirname, '..', '..', 'Fodos/blog-frontend', 'public');

async function generateDataJson() {

  try {
    const res = await fetch('https://magicpiks.onrender.com/api/data'); // remplace par ton URL réelle
    const data = await res.json();

    if (!fs.existsSync(FRONTEND_PUBLIC_DIR)) {
      throw new Error(`Dossier introuvable : ${FRONTEND_PUBLIC_DIR}`);
    }

    const outputPath = path.join(FRONTEND_PUBLIC_DIR, 'data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Fichier data.json généré : ${outputPath}`);
  } catch (err) {
    console.error('Erreur génération data.json :', err.message);
  }
}

generateDataJson();