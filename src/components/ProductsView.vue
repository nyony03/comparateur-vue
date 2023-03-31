<!-- Affichage de la liste des jeux -->
<template>
    <div>
        <h1>Producs View</h1>
        <router-link class="routerlink" :to="{ name: 'user', params: { id: id } }">
            <!-- Bouton de retour qui renvoie à la page de la liste des jeux -->
            <button class="user-btn">
                <h1>Utilisateur</h1>
            </button>
        </router-link>

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
    //name: "Card",

    name: "user",
    // Composants utilisés dans ce composant
    components: {
        Jeux,
    },
    // Données de ce composant
    data() {
        return {
            id: "63e91ed1aa8607500004d004",
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
.center {
    margin: 0 auto;
}

.profile {
    width: 50%;
    margin: 50px auto;
}

.user-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
}
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