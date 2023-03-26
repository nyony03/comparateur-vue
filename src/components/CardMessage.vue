<template>
  <div class="Card">
    <div class="Card-content">
      <p class="type">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMessage",
  props: {
    message: this.$store.getters.getErrorSuccessMessage
  }
}
</script>

<style scoped>
.Card {
  color: white;
  /*background-color: #000000;*/
  padding: 20px 10px;
  min-width: 500px;
  max-width: 750px;
  margin: 0 auto 60px;
  justify-content: center;
  border-radius: 15px;
  border: none;
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0af;
  animation: neon-border 1.5s ease-in-out infinite alternate;
  background: transparent;
}
</style>