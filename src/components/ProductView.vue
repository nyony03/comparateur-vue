<template>
    <div class="background">
        <!-- route pour le bouton retour (ramene a la page principale)-->
        <router-link :to="{ name: 'ProductsView' }">
            <!-- Bouton de retour qui renvoie à la page de la liste des jeux -->
            <button class="buttonRetour">
                <img
                    class="ImageButtonRetour"
                    src="https://cdn-icons-png.flaticon.com/512/61/61449.png"
                />
            </button>
        </router-link>
        <div
            class="backgroundImage"
            data-panel='{"autoFocus":true,"focusable":true,"clickOnActivate":true}'
            style="display: none"
        >
            <!-- Image de fond qui s'affiche derrière la page -->
            <img
                style="width: 100%"
                src="https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg?t=1667504225"
            />
        </div>
        <div class="JeuDetail">
            <!-- Titre du jeu -->
            <h1>{{ Jeu.titre }}</h1>
            <div class="container">
                <div class="gauche">
                    <!-- Description du jeu -->
                    <p>{{ Jeu.description }}</p>
                </div>
                <div class="droite">
                    <!-- Image du jeu -->
                    <img class="image" :src="Jeu.img" />
                </div>
            </div>

            <!-- Tag du jeu -->
            <p class="tag">#{{ Jeu.tag }}</p>
        </div>
    </div>
</template>

<script>
import api from "./api";

export default {
    name: "ProductView",
    data() {
        return {
            Jeu: {},
        };
    },
    // Récupération des informations du jeu sélectionné via l'API
    async mounted() {
        this.Jeu = await api.getJeu(this.$route.params.id);
        console.log(this.$route.params.id);
        console.log(this.Jeu);
    },
};
</script>

<style scoped>
/* image de fond */
.backgroundImage {
    display: none;
}

/* fond de la page */
.background {
    color: white;
    background-image: url("https://cdn.akamai.steamstatic.com/steam/apps/1057090/page_bg_generated_v6b.jpg?t=1667504225");
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(29, 32, 456, 0.2);
    backdrop-filter: blur(150px);
    height: 80vh;
}

/* boutton retour */
.buttonRetour {
    height: 50px;
    width: 50px;
    background-color: #2534;
    float: left;
    border-radius: 10% 50% 50% 50%;
    border: #2534 1px solid;
    margin: 2px;
}

/* Style de la div principale */
.container {
    column-count: 2;
}

/* image du bouton retour*/
.ImageButtonRetour {
    width: 30px;
    height: 30px;
}
</style>

