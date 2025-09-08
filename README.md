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

L’API permet à un administrateur de gérer les randonnées via un CRUD partiel, avec authentification sécurisée.

- Connexion **Admin** avec sessions & cookies sécurisés
- **CRUD** partiel sur les randonnées :
  - `GET` toutes les randonnées
  - `GET` par ID
  - `POST` (ajout) – réservé à l’Admin


---

## Principales étapes de création de l'API

 - Initialisation du projet Node.js
 - Mise en place du serveur Express (`server.js`) 
 - Connexion à MongoDB (`db.js`)
 - Création des modèles de données via Mongoose (`data.js`)
 - Injection des randonnées de test en base (`seed.js`)
 - Création des routes de l’API (`routes.js`)
 - Puis celles de l'authentification Admin (`auth.js`)
 - Déploiement sur Render 


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

- **CORS activé** pour autoriser les requêtes du frontend
- Utilisation de `credentials: true` pour permettre les cookies cross-domain
- Middleware de session sécurisé via `express-session`


---

## Authentification administrateur

Le backend comprend un système d’authentification réservé à l’administrateur du site :

- Les identifiants sont stockés dans une **collection dédiée** (`admin`)
- Les **mots de passe sont hashés** avec `bcrypt` avant stockage
- Lors d’une tentative de connexion (`POST /api/auth/login`), les identifiants sont vérifiés côté serveur
- Si validés, une **session est créée** et un **cookie httpOnly sécurisé** est envoyé au client
- Certaines routes (comme `POST /api/data`) sont **protégées** par un middleware (`isAdminLoggedIn.js`)
