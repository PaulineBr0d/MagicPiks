require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./src/admin"); // Chemin à ajuster selon ton projet

async function main() {
  const [,, email, password] = process.argv;

  if (!email || !password) {
    console.log("Usage: node createAdmin.js <email> <password>");
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI, { dbName: "db_1_h"});
  console.log("Connecté à MongoDB");

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log("Un admin avec cet email existe déjà.");
    return;
  }

  const hashed = await bcrypt.hash(password, 10);
  await Admin.create({ email, password: hashed });

  console.log("Admin créé avec succès");
  mongoose.disconnect();
}

main().catch(err => {
  console.error("Erreur création admin:", err);
  mongoose.disconnect();
});