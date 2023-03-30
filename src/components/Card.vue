<template>
    <!-- s'affiche pour chaque jeu dans la page d'acceuille ave l'api-->
    <div class="Card">
        <!-- Checkbox pour sélectionner/désélectionner le jeu -->
        <div class="select">
            <label class="container">
                <input
                    class="buttonCheck"
                    type="checkbox"
                    :id="id"
                    :value="id"
                    v-on:click="affiche"
                    :disabled="!canBeSelected"
                />
                <span class="checkmark"></span>
            </label>
        </div>

        <!-- Lien pour accéder à la page de détails du jeu -->
        <router-link
            class="routerlink"
            :to="{ name: 'ProductView', params: { id: id } }"
        >
            <div class="gauche">
                <h1>{{ titre }}</h1>
                <p class="tag">{{ prix }}€</p>
                <div class="description">
                    <!-- Affichage de la description du jeu -->
                    <p class="descriptionCute">{{ description }}</p>
                    <p class="troisPoints">...</p>
                </div>
            </div>
            <div class="droite">
                <!-- Affichage de l'image du jeu -->
                <img class="image" :src="img" />
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        id: String,
        titre: String,
        tag: String,
        prix: Number,
        description: String,
        img: String,
        canBeSelected: Boolean,
    },

    methods: {
        affiche: function (event) {
            // Événement pour signaler la sélection du jeu
            this.$emit("selected", this.id);
        },
    },
};
</script>

<style scoped>
.description {
    width: 90%;
    text-align: center;
    padding: 1px;
}

.description .descriptionCute {
    --max-lines: 2;
    position: relative;
    max-height: 39px;
    overflow: hidden;
    padding-right: 1rem; /* espace pour les points de suspension */
    margin-bottom: 0;
}

.troisPoints {
    margin: 0;
}

.routerlink {
    color: white;
}
.Card {
    column-count: 3;
    color: white;
    background-color: #363d5d;
    padding: 10px;
    margin: 15px 20px;
    min-width: 1000px;
    max-width: 1500px;
    min-height: 20vh;
    display: table;
}
.Card:hover {
    background-color: #5d658e;
}
.image:hover {
    background-image: url("https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392");
    z-index: 1;
}
h1 {
    text-decoration: underline;
}
.tag {
    font-style: italic;
}

.select {
    float: none;
    display: table-cell;
    vertical-align: middle;
    z-index: 5;
    outline: none;
    text-decoration: none;
    width: 10%;
    text-align: center;
    padding: 4%;
}

.selectJeu {
    width: 50px;
}
.gauche {
    float: none;
    display: table-cell;
    vertical-align: top;
    padding: 0 20px;
}
.droite {
    float: none;
    display: table-cell;
    vertical-align: top;
}

input {
    width: 50px;
}

.container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-transform: uppercase;
    width: auto;
}

/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>