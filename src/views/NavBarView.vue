<template>
  <nav class="navbar">
    <div class="nav-container">
     <img src="../assets/gamepad.png"
             alt="logo"
             style="width: 5%"
     />
      <router-link class="li" to="/">Home</router-link> |
      <router-link class="li" to="/compare">Comparer des jeux</router-link> |
      <router-link v-if="isConnected" class="li" to="/about">Mon profil</router-link>
      <router-link v-if="!isConnected" class="li" to="/auth">Se connecter</router-link> |
      <router-link v-if="!isConnected" class="li" to="/registration">S'inscrire</router-link>
      <router-link v-if="isConnected" @click="logout" class="li" to="">Deconnexion</router-link>
      <SearchBar/>
    </div>
    <div>
      <div class="Jeux">
        <h1 class="neon">Jeux du moments</h1>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import {mapState} from "vuex";

export default {
  name: "NavBarView",
  components: {SearchBar},
  data() {
    return {
      query: ''
    };
  },
  computed: {
    ...mapState(['isConnected'])
  },
  methods: {
    search() {
      console.log(`Recherche pour: ${this.query}`);
    },
    logout(){
      this.$store.commit('setIsConnected', false);
      this.$store.commit('deleteToken');
    }
  }
}
</script>

<style scoped>

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav {
  padding: 30px;
  color: #fff;
}


.nav-container {
  border-radius: 25px;
  height: fit-content;
  display: inline-flex;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 5px 5px;
  margin: 10px 0 1rem;
}

.neon {
  text-align: center;
  color: #fff;
  font-size: 5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 42px rgb(18, 64, 230),
      0 0 77px rgb(230, 18, 124),
      0 0 100px rgb(230, 18, 124);
  animation: lumiere 1s infinite linear;
}

@keyframes lumiere {
  0%{
    text-shadow:
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 42px rgb(230, 18, 124),
        0 0 77px rgb(230, 18, 124),
        0 0 100px rgb(230, 18, 124);
  }
  50%{
    text-shadow:
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 32px rgb(230, 18, 124),
        0 0 87px rgb(230, 18, 124),
        0 0 120px rgb(230, 18, 124);
  }
}

.li{
  list-style: none;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  margin: 0 auto;
  border-radius: 50px;
  font-size: large;
}

.li:hover{
  background: linear-gradient(to bottom, #e8edec, #d2d1d3);
  box-shadow: 0px 3px 20px 0px black;
  transform: scale(1.2);
  color: black;
}

</style>