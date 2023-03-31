# Jeux du moments - FrontEnd
Ce dépôt contient le code frontend d'une application de comparaison de jeux vidéos. L'application permet aux administrateurs de se connecter pour ajouter, modifier et supprimer des produits avec leurs caractéristiques. 
Les utilisateurs non authentifiés peuvent afficher la liste des jeux vidéos et comparer deux jeux vidéos.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Fonctionnalités
- [x] Une route liste de produits. Les produits sont définis par un tableau provenant de data.
- [x] Récupération des produits depuis le service backend.
- [x] Ajout d'une data prix
- [x] Ajout d'une barre de recherche
- [x] Ajout d'une nouvelle route permetant de consulter la fiche détaillée d’un produit
- [x] Ajout de la possibilité de sélectionner deux produits afin d’accéder à une nouvelle route
 permetant de consulter la comparaison entre deux produits
- [x] Ajout d'une route permettant de se connecter au backend (récupération de votre JWT)
- [x] Ajout d'une route inscription
- [x] Ajout sur la vue de la liste produit d'un
 bouton “nouveau” qui affichera un formulaire pour créer un nouveau produit.
- [x] Ajout d'un bouton “Supprimer” sur chaque produit afin de supprimer celui-ci. 
- [x] Ajout d'un bouton “Editer” pour modifier le produit sélectionné. 
- [x] Création d'un composant capable de recevoir une sélection de produits via EventBus et de
  rediriger vers la page de comparaison

## Auteur

Ce projet a été réalisé par Ny Ony RAKOTONDRAMONJA et Cécile Burille.