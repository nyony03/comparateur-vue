<template>
  <div>
    <button v-if="isConnected" @click="showModal = true" class="neon-button">Créer un jeu</button>
    <ModalVue :is-open="showModal" @close-modal="showModal = false" />
    <div class="card" v-for="item in items" :key="item._id">
      <router-link
          class="routerlink"
          :to="{ name: 'GameView', params: { id: item._id } }"
      >
        <card
            :id="item._id"
            :url="item.url"
            :name="item.name"
            :description="item.description"
            :type="item.type"
        />
      </router-link>
    </div>
  </div>

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
      showModal : false
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
  }
}
</script>

<style scoped>
.card{
  color: inherit;
}

.neon-button {
  background-color: #ab5f5f;
  color: #fff;
  font-size: 1em;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  box-shadow: 0 0 15px #ffffff;
  text-shadow: 0 0 10px #000000;
  transition: all 0.3s ease-in-out;
  margin-bottom: 50px;
}
.neon-button:hover {
  background-color: #ab5f5f;
  color: #ffffff;
  box-shadow: 0 0 15px #ab5f5f;
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