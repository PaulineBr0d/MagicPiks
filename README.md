# Projet Randos - API & Site Web

## Description

Ce projet est une application web affichant des randonnées avec un backend API Node.js + MongoDB et un frontend JavaScript.  
Les données sont stockées dans MongoDB et l’API permet de récupérer les infos.  
Le site affiche les listes, détails, et filtres des randos. Design :
https://www.figma.com/design/GC5v95K5CKXshqJNZi0CTG/projet_formation?node-id=3-1682&t=Nt0IzPanDyLM6y2a-0

---

## Fonctionnalités réalisées

- Backend Node.js avec Express et MongoDB  
- Seed de la base avec des données initiales  
- Routes API CRUD (lecture) pour récupérer les randonnées  
- Frontend JS dynamique pour :  
  - Page index (4 dernières randos)  
  - Page listing filtrée (par lieu, difficulté, intérêt, tag)  
  - Page détail avec affichage complet  
- Menus dynamiques basés sur les données  
- Slider d’images sur la page détail  

---

## Prérequis

- Node.js (version 16+ recommandée)  
- MongoDB local ou service cloud (ex : MongoDB Atlas)  
- Compte Heroku (pour déploiement)

---

## Installation locale

1. Cloner le projet  
git clone <URL_DU_PROJET>
cd <nom_du_projet>
2. Installer les dépendances  
npm install
3. Configurer les variables d’environnement  
- Créer un fichier `.env` à la racine  
- Ajouter la variable MongoDB (exemple) :  
  ```
  MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/data?retryWrites=true&w=majority
  ```
4. Lancer le seed (si nécessaire)  
node src/seed.js
5. Lancer le serveur localement  
npm start
6. Ouvrir dans le navigateur  
http://localhost:3000

---

## Déploiement sur Heroku

### Étapes

1. Créer un compte Heroku et installer la CLI  
npm install -g heroku
heroku login
2. Depuis le dossier du projet, créer une app Heroku  
heroku create mon-app-randos
3. Ajouter la variable d’environnement MongoDB dans Heroku  
heroku config:set MONGODB_URI="mongodb+srv://<user>:<password>@cluster0.mongodb.net/randos?retryWrites=true&w=majority"
4. Préparer le projet :  
- Vérifier présence du fichier `Procfile` avec :  
  ```
  web: node index.js
  ```  
- Vérifier que dans `index.js` le serveur écoute bien sur `process.env.PORT || 3000`

5.  Initialiser git si besoin, puis pousser sur Heroku 
git init 
git add .
git commit -m "Deploy to Heroku"
git push heroku main
6. Ouvrir l’app Heroku dans le navigateur  
heroku open

---

## À venir / recommandations

- Héberger les images sur un service spécialisé (ex: Cloudinary)  
- Modifier la base pour stocker les URLs d’images externes    
- Ajouter des tests automatisés  
- Ajouter une gestion des erreurs plus fine côté frontend  
- Ajouter un système d’authentification si besoin

---

## Ressources utiles

- [Heroku Node.js Deployment](https://devcenter.heroku.com/articles/getting-started-with-nodejs)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
- [Cloudinary](https://cloudinary.com/documentation)  
- [Express.js Documentation](https://expressjs.com/)

---

