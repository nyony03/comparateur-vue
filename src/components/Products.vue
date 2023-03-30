<template>
  <div>
    <button v-if="isConnected" @click="showModal = true" class="neon-button">Créer un jeu</button>
    <div class="card" v-for="item in items" :key="item._id">
      <router-link
          class="routerlink"
          :to="{ name: 'GameView', params: { id: item._id } }"
          v-if="!showModal"
      >
        <card
            :id="item._id"
            :url="item.url"
            :name="item.name"
            :description="item.description"
            :type="item.type"
            :item="item"
            @select-item="selectItem"
        />
      </router-link>
    </div>
    <ModalVue
        :is-open="showModal"
        @close-modal="showModal = false"
        :selectedItem="selectedItem"
    />
  </div>pr
</template>

<script>
import card from "@/components/Card.vue";
import api from "@/script/helper/api"
import {mapState} from "vuex";
import ModalVue from "@/components/Modal.vue";

export default {
  name: "product-vue",
  components: {
    ModalVue,
    card
  },
  computed: {
    ...mapState(['isConnected'])
  },
  data(){
    return {
      items: [],
      showModal : false,
      selectedItem: null
    }
  },
  async mounted() {
    api.gameList()
        .then(data => {
          this.items = data
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.showModal = true;
    },
    openModal() {
      this.selectedItem = null; // initialiser selectedItem à null
      this.showModal = true;
    },
  },
}
</script>

<style scoped>
.card{
  color: inherit;
}

.neon-button {
  background-color: #1e7043;
  color: #fff;
  font-size: 1.5em;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  box-shadow: 0 0 15px #ffffff;
  text-shadow: 0 0 10px #000000;
  transition: all 0.3s ease-in-out;
  margin-bottom: 50px;
}
.neon-button:hover {
  background-color: #52b07d;
  color: #ffffff;
  box-shadow: 0 0 15px #52b07d;
  text-shadow: 0 0 10px;
}

h1 {
  color: white;
  margin-bottom: 30px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>