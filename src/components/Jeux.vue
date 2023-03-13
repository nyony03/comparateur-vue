<template>
  <div class="Jeux">
    <h1>Jeux du moments</h1>

    <!--
    <router-link
      v-for="item in list"
      :to="{ name: 'ProductView', params: { id: item.id } }"
      :key="item.id"
    >
        </router-link>

    -->
    <Card
        class="JeuList-item"
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :titre="item.titre"
        :tag="item.tag"
        :prix="item.prix"
        :description="item.description"
        :img="item.img"
        :canBeSelected="!hasTwoSelectedGame || Jeu.includes(item.id)"
        @selected="selectId"
    >
    </Card>

    <!--<Card v-for="item in list" :key="item.id" @blockCheckBox="o"></Card>-->

    <router-link
        v-if="Jeu.length === 2"
        :to="{ name: 'compare', params: { idJ1: Jeu[0], idJ2: Jeu[1] } }"
    >
      <button v-if="Jeu.length === 2" class="btnValid">
        Comparer {{ Jeu[0] }} et {{ Jeu[1] }}
      </button>
    </router-link>

    <button v-if="Jeu[0] === null || Jeu[1] === null" class="btn">
      veuiller choisir deux jeux a comparer
    </button>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Jeux",
  props: {
    list: Array,
    checkedProducts: Array,
  },
  components: { Card },
  data() {
    return {
      Jeu: [],
    };
  },
  computed: {
    hasTwoSelectedGame() {
      return this.Jeu.length >= 2;
    },
  },
  methods: {
    selectId: function (JeuID) {
      if (this.Jeu.includes(JeuID)) {
        const gameIndex = this.Jeu.indexOf(JeuID);
        this.Jeu.splice(gameIndex, 1);
        return;
      }
      this.Jeu.push(JeuID);
    },

    blockCheckBox: function (o) {
      console.log("coucou");
    },
  },
};
</script>

<style scoped>
.btn {
  color: black;
  border: 1px solid gray;
  width: 30%;
  height: 50px;
  background-color: grey;
  position: fixed;
  bottom: 1%;
  right: 1%;
  z-index: 9999;
  margin: 0 35%;
}

.btnValid {
  color: black;
  border: 1px solid gray;
  width: 30%;
  height: 50px;
  background-color: green;
  position: fixed;
  bottom: 1%;
  right: 1%;
  z-index: 9999;
  margin: 0 35%;
}

h1 {
  color: white;
  margin-bottom: 30px;
}
.buttonCompare {
  position: fixe;
}
</style>