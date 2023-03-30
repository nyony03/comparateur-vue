<!-- Affichage de la liste des jeux -->
<template>
    <div>
        <h1>Producs View</h1>
        <!-- Affichage des jeux à l'aide du composant Jeux -->
        <Jeux :list="liste"></Jeux>
    </div>
</template>


<script>
// Importation de l'API et du composant Jeux
import api from "./api";
import Jeux from "./Jeux";
export default {
    // Nom du composant
    name: "Card",
    // Composants utilisés dans ce composant
    components: {
        Jeux,
    },
    // Données de ce composant
    data() {
        return {
            liste: [],
        };
    },
    // Méthode appelée au début
    mounted() {
        this.liste = api.getList();
    },
};
</script>

<style scoped>
/* style des balise Card */
.Card {
    column-count: 3;
    color: white;
    background-color: #363d5d;
    padding: 10px;
    margin: 0 auto 15px;
    min-width: 1000px;
    max-width: 1500px;
}

/* Style quand on survole une balise Card avec la souri */
.Card:hover {
    background-color: #5d658e;
}

/* souligner le texte */
h1 {
    text-decoration: underline;
}

/* mettre en italique le texte */
.tag {
    font-style: italic;
}
</style>