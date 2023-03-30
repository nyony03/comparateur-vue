<template>
    <div>
        <router-link :to="{ name: 'ProductsView' }">
            <button class="buttonRetour">
                <img
                    class="ImageButtonRetour"
                    src="https://cdn-icons-png.flaticon.com/512/61/61449.png"
                />
            </button>
        </router-link>

        <h1>Comparateur</h1>
        <div class="contain">
            <div class="tire">
                <h1>{{ Jeu1.titre }}</h1>
                <h1>{{ Jeu2.titre }}</h1>
            </div>
            <div class="images">
                <img class="image" :src="Jeu1.img" />
                <img class="image" :src="Jeu2.img" />
            </div>
            <div class="prix">
                <h1
                    class="prix"
                    :class="{ 'prix--lowCost': Jeu1.id === prixLeMoinsCher }"
                >
                    {{ Jeu1.prix }}€
                </h1>
                <h1
                    class="prix"
                    :class="{ 'prix--lowCost': Jeu2.id === prixLeMoinsCher }"
                >
                    {{ Jeu2.prix }}€
                </h1>
            </div>
            <div class="note">
                <h1
                    class="note"
                    :class="{
            'note--lowCost': Jeu1.id === noteLaPlusBas,
            'note--egale': Aucun === noteLaPlusBas,
          }"
                >
                    {{ Jeu1.note }}/20
                </h1>
                <h1
                    class="note"
                    :class="{
            'note--lowCost': Jeu2.id === noteLaPlusBas,
            'note--egale': Aucun === noteLaPlusBas,
          }"
                >
                    {{ Jeu2.note }}/20
                </h1>
            </div>
            <div class="descriptions">
                <p>{{ Jeu1.description }}</p>
                <p>{{ Jeu2.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import api from "./api";

export default {
    name: "ProductView",
    data() {
        return {
            Jeu1: {},
            Jeu2: {},
            Aucun: String,
        };
    },
    computed: {
        prixLeMoinsCher() {
            if (this.Jeu1.prix < this.Jeu2.prix) {
                return this.Jeu1.id;
            }
            if (this.Jeu2.prix < this.Jeu1.prix) {
                return this.Jeu2.id;
            }
            return "";
        },
        noteLaPlusBas() {
            if (this.Jeu1.note < this.Jeu2.note) {
                return this.Jeu2.id;
            }
            if (this.Jeu2.note < this.Jeu1.note) {
                return this.Jeu1.id;
            }
            if (this.Jeu2.note === this.Jeu1.note) {
                return "aucun";
            }

            return "";
        },
    },
    async mounted() {
        this.Jeu1 = await api.getJeu(this.$route.params.idJ1);
        this.Jeu2 = await api.getJeu(this.$route.params.idJ2);
        this.Aucun = "aucun";
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
}
.tire,
.images,
.prix,
.note,
.descriptions {
    column-count: 2;
    background-color: #424861, #0f0f27;
    color: white;
    /*border: 2px solid #1e212f;*/
    column-rule: 2px solid #0f0f27;
}

.prix--lowCost {
    color: #fff;
    animation: flicker 1.5s infinite alternate;
    color: #fff;
}

/* Flickering animation */
@keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
        text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }

    20%,
    24%,
    55% {
        text-shadow: none;
    }
}

.note--lowCost {
    color: red;
    border: solid 1px red;
}
.note--egale {
    color: orange;
    border: solid 1px orange;
}

h1,
img,
p {
    margin: 10px;
}

.titre {
    margin-top: 20px;
}

.buttonRetour {
    height: 50px;
    width: 50px;
    background-color: #2534;
    float: left;
    border-radius: 10% 50% 50% 50%;
    border: #2534 1px solid;
    margin: 2px;
}

.balise1 {
    column-count: 2;
}
.ImageButtonRetour {
    width: 30px;
    height: 30px;
}
</style>