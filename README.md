# Projet Blog Photos & Randos – API Backend

## Description

Dans le cadre du début de ma formation **Concepteur Développeur d'Applications**, ce projet constitue le **backend** de l'application web **MagicPiks**.

Il s'agit d'une API REST développée en **Node.js** avec **Express**, permettant de gérer une base de données de randonnées (titre, description, lieu, difficulté, tags, images, etc.).  
Les données sont stockées dans **MongoDB Atlas**, et les images sont hébergées sur **Cloudinary**.  
L'application intègre également un système d’**authentification administrateur** sécurisé avec sessions et cookies.

L'API est déployée en ligne via **Render** et consommée par un frontend en **JavaScript Vanilla**.

### Technologies utilisées

- **Base de données** : MongoDB Atlas  
- **Serveur web/API** : Node.js + Express  
- **Stockage d’images** : Cloudinary  
- **Déploiement** : Render  
- **Authentification et middleware** : express-session, bcrypt, cors


---

## Fonctionnalités

- Connexion **Admin** avec sessions & cookies sécurisés
- **CRUD** partiel sur les randonnées :
  - `GET` toutes les randonnées
  - `GET` par ID
  - `POST` (ajout) – réservé à l’Admin


---

## Principales étapes de création de l'API

 1. Initialisation du projet Node.js
 2. Mise en place du serveur Express (`server.js`) a
 3. Connexion à MongoDB (`db.js`)
 4. Création des modèles de données via Mongoose (`data.js`)
 5. Injection des randonnées de test en base (`seed.js`)
 6. Création des routes de l’API (`routes.js`)
 7. Puis celles de l'authentification Admin (`auth.js`)
 8. Déploiement sur Render 


---

## Principaux endpoints de l'API

| Méthode | Route                | Description                              | 
|---------|----------------------|------------------------------------------|
| GET     | `/api/data`          | Récupérer toutes les randonnées          | 
| POST    | `/api/data`          | Ajouter une randonnée                    |
| GET     | `/api/data/:id`      | Détail d’une randonnée                   |
| GET     | `/api/auth/check`    | Vérification connexion                   |
| POST    | `/api/auth/login`    | Connexion admin                          | 
| POST    | `/api/auth/logout`   | Déconnexion admin                        | 


---

## Middleware & sécurité

- Activation de CORS pour autoriser le frontend à accéder à l’API
- Utilisation de `credentials: true` pour permettre les cookies cross-domain
- Middleware de session (`express-session`) avec cookies sécurisés


---

## Authentification sécurisée

Le backend inclut un système d’authentification réservé à l’administrateur du site :

- Les identifiants sont enregistrés dans une **collection MongoDB** dédiée (`admin.js`)
- Les **mots de passe sont hashés** avec `bcrypt` avant enregistrement
- À la connexion (`POST /api/auth/login`), les identifiants sont vérifiés côté serveur
- Si les identifiants sont valides, une **session** est créée et un **cookie sécurisé** est envoyé au client (`httpOnly`)
- Certaines routes (comme `POST /api/data`) sont protégées par un middleware `isAdminLoggedIn.js`
