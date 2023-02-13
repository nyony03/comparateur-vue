<template>
  <OneCard :jeu="jeu"/>
</template>

<script>
import api from "@/script/helper/api"
import OneCard from "@/components/OneCard.vue";
export default {
  name: "GameView",
  components: {
    OneCard
  },
  data(){
    return{
      jeu: []
    }
  },
  async mounted(){
    console.log(this.jeu)
    api.oneGame(this.$route.params.id)
        .then(data => {
          this.jeu = data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style scoped>

</style>