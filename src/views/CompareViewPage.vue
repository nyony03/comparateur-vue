<template>
    <div>
        <h1>Voici la comparaison du jeu {{ jeu1.name }} et du jeu {{ jeu2.name }}</h1>
    </div>
    <div class="contain">
        <div class="tire">
            <h1>{{ jeu1.name }}</h1>
            <h1>{{ jeu2.name }}</h1>
        </div>
        <div class="images">
            <img class="image" v-if="jeu1.url" :src="jeu1.url"/>
            <img class="image" v-if="jeu2.url" :src="jeu2.url"/>
        </div>
        <div class="tags">
            <p>#{{ jeu1.type }}</p>
            <p>#{{ jeu2.type }}</p>
        </div>
        <div class="prices">
            <p>Prix : {{ jeu1.price }}</p>
            <p>Prix : {{ jeu2.price }}</p>
        </div>
        <div class="descriptions">
            <p>{{ jeu1.description }}</p>
            <p>{{ jeu2.description }}</p>
        </div>
    </div>
</template>


<script>

import api from "@/script/helper/api";

export default {
    name: "CompareViewPage",
    data() {
        return {
            jeu1: [],
            jeu2: [],
        };
    },
    async mounted() {
        console.log('ici')
        api.oneGame(this.$route.params.idJ1)
            .then(data => {
                this.jeu1 = data
            })
            .catch(error => {
                console.log(error)
            })
        api.oneGame(this.$route.params.idJ2)
            .then(data => {
                this.jeu2 = data
            })
            .catch(error => {
                console.log(error)
            })
    },
};
</script>

<style scoped>
.contain {
    background-color: #363d5d;
    width: 90vw;
    margin: 5vh 5vw;
    padding: 20px;
    column-rule: 2px solid #0f0f27;
    font-size: large;
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0af;
}

.tire,
.tags,
.descriptions {
    column-count: 2;
    color: white;
    margin-top: 15px;
    margin-bottom: 15px;
}
.images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.image {
    width: 75%;
    margin: 0 auto;
}
.prices{
    column-count: 2;
    color: #ab5f5f;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: x-large;
}

h1{
    color: white;
}
h1,
img,
p {
    margin: 10px;
}
</style>