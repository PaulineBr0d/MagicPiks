const fs = require('fs');
const path = require('path');
const https = require('https'); 
require('dotenv').config();


const API_URL = 'https://magicpiks.onrender.com/api/data';

async function generateDataJSON() {
  try {
    const response = await fetch(API_URL, {
      agent: new https.Agent({ rejectUnauthorized: false }) 
    });

    if (!response.ok) {
      throw new Error(`Erreur API : ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    const filePath = path.join(__dirname, '../public/data.json');
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    console.log('Fichier data.json généré depuis l’API');
    process.exit(0);
  } catch (err) {
    console.error('Erreur génération data.json :', err);
    process.exit(1);
  }
}

generateDataJSON();
