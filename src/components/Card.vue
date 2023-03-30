<template>
  <div class="Card">
    <div class="Card-content" :class="{selected: selected}">
      <div class="card-left">
        <EventCard v-if="hasMessage" :error-message="errorMessage" :success-message="successMessage"/>
        <div>
          <button v-if="isConnected" @click.prevent="updateItem" class="button-update">Modifier</button>
          <ModalVue :is-open="showModal" v-on:click.prevent @close-modal="showModal = false" />
          <button v-if="isConnected" @click.prevent="deleteGame" class="button-delete">Supprimer</button>
        </div>
        <h1>{{ name }}</h1>
        <p class="type">#{{type}}</p>
        <p>{{description}}</p>
        <div class="spacer"></div>
      </div>
      <div class="card-right" >
        <img v-if="url" :src="url"  />
      </div>
    </div>
  </div>
</template>

<script>
// import CheckBox from "@/components/Checkbox.vue";
import ModalVue from "@/components/Modal.vue";
import {mapState} from "vuex";
import api from "@/script/helper/api";
import EventCard from "@/components/EventCard.vue";

export default {
  name: "card-vue",
  components:{
    EventCard,
    ModalVue
  },
  computed: {
    ...mapState(['isConnected']),
    hasMessage() {
      return this.errorMessage || this.successMessage;
    }
  },
  props:{
    id: String,
    url: {type: String, default: ''},
    name: String,
    description: String,
    type: String,
    item: {},
    canBeSelected: Boolean,
    selected: Boolean
  },
  data(){
    return {
      showModal : false,
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    updateItem() {
      this.$emit('select-item', this.item);
      this.showModal = true;
    },
    async deleteGame(){
      const id = this.item._id
      // Envoyer les données du formulaire
      let token = this.$store.getters.getToken
      await api.deleteGame(id, token)
          .then(() => {
            this.successMessage = 'Le jeu a été supprimer avec succès';
            setTimeout(() => {
              location.reload()
            }, 2000);
          })
          .catch((error) => {
            this.errorMessage = error.message;
          })
    }
  }

}
</script>

<style scoped>
.Card {
  column-count: 2;
  color: white;
  /*background-color: #000000;*/
  padding: 20px 10px;
  width: 80%;
  margin: 0 auto 60px;
  justify-content: center;
  border-radius: 15px;
  border: none;
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0af;
  animation: neon-border 1.5s ease-in-out infinite alternate;
  background: transparent;
}

@keyframes neon-border {
  from {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0af;
  }
  to {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 25px #0af;
  }
}

.Card:hover {
  background-color: #363d5d;
  transform: scale3d(1.05,1.05,1);
  transition: transform 2s ease-in-out;
}

img{
  border-radius: 10px;
  margin-bottom: 5px;
}

.Card-content{
  margin: 0 auto;
}
h1 {
  text-decoration: underline;
}
.type {
  font-style: italic;
}

.card-right{
  float: none;
  vertical-align: center;
}

.card-left{
  margin-left: 6rem;
}

.card:hover img { /*6*/
  filter: grayscale(0);
}

button {
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

.button-update{
  background-color: #00BFFF;
  color: #fff;
  box-shadow: 0 0 10px #00BFFF;
}

.button-delete{
  background-color: #e15e5e;
  color: #fff;
  box-shadow: 0 0 10px #e15e5e;
}

.spacer {
  height: 20px;
}

.selected {
    background-color: #ab5f5f;
    color: #ffffff;
    transition: none;
}

</style>