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
-[x] Faire une liste de produits. Les produits sont définis par un tableau provenant de data.
-[x] Récupérer les produits depuis le service backend.
-[x] Ajouter une data prix
-[x] Ajouter une barre de recherche
-[x] Ajouter une nouvelle route permetant de consulter la fiche détaillée d’un produit
-[x] Ajouter la possibilité de sélectionner deux produits afin d’accéder à une nouvelle route
 permetant de consulter la comparaison entre deux produits
-[x] Ajouter une route permetant de se connecter au backend (récupération de votre JWT)
-[x] Ajouter une route inscription
-[x] Si l’utilisateur est connecté (et seulment dans ce cas) : Ajouter sur la vue de la liste produit un
 bouton “nouveau” qui affichera un formulaire pour créer un nouveau produit.
- [x] Puis ajouter un bouton “Supprimer” sur chaque produit afin de supprimer celui-ci. Attention
  le client ne doit pas recharger sa page. (il devra mettre à jour sa liste de produit si la supression s’est
  bien passée)
- [x] Enfin ajouter un bouton “Editer” pour modifier le produit sélectionné. Attention le formulaire
  d’ajout et d’édition doit être le même composant.
- [x] Créer un composant capable de recevoir une sélection de produits via EventBus et de
  rediriger vers la page de comparaison. Utiliser ce composant sur toutes vos pages.

## Projet conçu par:
Ny Ony Rakotondramonja

Cécile Burille

LP APIDAE - IUT MONTPELLIER