const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Data = require('../src/data'); // 

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI);
}

async function generateDataJSON() {
  try {
    await connectDB();
    const data = await Data.find().lean();

    const filePath = path.join(__dirname, '../public/data.json');
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    console.log('Fichier data.json généré');
    process.exit(0);
  } catch (err) {
    console.error('Erreur génération data.json :', err);
    process.exit(1);
  }
}

generateDataJSON();
