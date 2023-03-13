<template>
  <div class="Card">
    <div class="select">
      <input
          class="buttonCheck"
          type="checkbox"
          :id="id"
          :value="id"
          v-on:click="affiche"
          :disabled="!canBeSelected"
      />
      <label for="buttonCheck"></label>
    </div>

    <router-link
        class="routerlink"
        :to="{ name: 'ProductView', params: { id: id } }"
    >
      <div class="gauche">
        <h1>{{ titre }}</h1>
        <p class="tag">{{ prix }}€</p>
        <div class="description">
          <p class="descriptionCute">{{ description }}</p>
          <p class="troisPoints">...</p>
        </div>
      </div>
      <div class="droite">
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
      // `this` inside methods point to the Vue instance
      this.$emit("selected", this.id);
    },
  },
};
</script>

<style scoped>
/*
input[type="checkbox"] {
  -moz-appearance: none;
  -ms-appearance: none;
  background-color: #363d5d;
  border: 2px solid #0f0f27;
  height: 25px;
  width: 25px;
}
input[type="checkbox"]:checked {
  background-color: #1e212f;
  border: 2px solid #0f0f27;
  background-image: url("https://webinfo.iutmontp.univ-montp2.fr/~burillec/logoCheck.png");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 25px;
  width: 25px;
}
input[type="checkbox"]:before {
  font-family: FontAwesome;
  display: block;
  color: grey;
  font-size: 13px;
  position: absolute;
}
input[type="checkbox"]:hover {
  background-color: #363d5d;
  border: 2px solid #0f0f27;
  cursor: pointer;
  height: 25px;
  width: 25px;
}
*/

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
  padding-right: 1rem; /* space for ellipsis */
  margin-bottom: 0;
}

.troisPoints {
  margin: 0;
}

/*
input[type="checkbox"]:before {
  font-family: FontAwesome;
  content: "\f00c";
  display: block;
  color: grey;
  font-size: 13px;
  position: absolute;
  accent-color: #9b59b6;
}
*/

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
</style>