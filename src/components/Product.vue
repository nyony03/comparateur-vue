<template>
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
</template>

<script>
import card from "@/components/Card.vue";
import api from "@/script/helper/api"

export default {
  name: "product-vue",
  components: {
    card
  },
  data(){
    return {
      items: []
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