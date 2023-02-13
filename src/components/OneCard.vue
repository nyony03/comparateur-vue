<template>
  <div class='card' v-if="jeu.url2" :style="{'background-image': 'url('+jeu.url2+')'}">
    <div class="inner">
      <h1 class="title">{{ jeu.name }}</h1>
      <p class="subtitle"> {{ jeu.description }} </p>
      <b class="subtitle-type"> Type : {{jeu.type}} </b>
      <b class="subtitle-platform"> Plateforme : {{jeu.platform}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneCard",
  props: {
    jeu: []
  },
  mounted() {
    console.log(this.jeu)
  }

}
</script>

<style scoped>
.card {
  height: 40rem;
  width: 80%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  text-decoration: none;
  background-size: cover;
  margin: 0 auto;
  justify-content: flex-end;
  border-radius: 10px;
}

.inner {
  height: 75%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 30px

}

.title {
  font-size: 24px;
  color: black;
  text-align: center;
  font-weight: 700;
  color: #181818;
  text-shadow: 0px 2px 2px #a6f8d5;
  position: relative;
  margin: 0 0 20px 0;
}

.subtitle {
  color: #b0215e;
  text-align: center;
}

.subtitle-type {
  color: #b0215e;
  text-align: center;
  margin-bottom: 1rem;
}

.subtitle-platform {
  color: #b0215e;
  text-align: center;
}
</style>