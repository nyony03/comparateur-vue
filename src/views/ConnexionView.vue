<template>
  <div class="container">
    <div class="left">
      <div class="header">
        <h2 class="animation a1">Bienvenue</h2>
        <h4 class="animation a2">Pour se connecter, veuillez utilisez votre mail et votre mot de passe</h4>
      </div>
      <form class="form" action="/auth/login" @submit.prevent="submitForm">
        <input type="login" v-model="user.login" class="form-field animation a3" placeholder="login">
        <input type="password" v-model="user.password" class="form-field animation a4" placeholder="Mot de passe">
        <button class="animation a6" type="submit">SE CONNECTER</button>
      </form>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import api from "@/script/helper/api"
import router from "@/router";
import {mapMutations} from 'vuex'
export default {
  name: "connexion-auth",
  data(){
    return{
      token: [],
      user: {
        login: null,
        password: null
      }
    }
  },
  methods: {
    async authentification(user){
      const response = await api.authentification(user)
      this.token = response.jwt
      return this.token
    },
    ...mapMutations(['setToken']),
    submitForm() {
      this.authentification(this.user)
          .then(token => {
            console.log('token',token);
            this.$store.commit('saveToken', token);
            console.log("ici ", this.$store.getters.getToken);
            this.$store.commit('setIsConnected', true);
            router.push('/')
          })
          .catch(error => {
              this.$store.commit('setError', true);
              this.$store.commit('setErrorSuccessMessage', error);
          })
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  /*height: 100vh;*/
  font-family: 'Rubik', sans-serif;
  width: 80%;
  height: 50%;
  margin: 0 auto;
}

.left {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  animation-name: left;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 1s;
}

.right {
  flex: 1;
  background-color: black;
  transition: 1s;
  background-image: url("../assets/photo-auth.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

h2 {
  font-size: 30px;
}

.header > h2 {
  margin: 0;
  color: #4f46a5;
}

.header > h4 {
  font-weight: normal;
  font-size: 15px;
  color: white;
  margin-top: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  /*margin: 0 auto;*/
}

.form > p {
  text-align: right;
}

.form > p > a {
  color: white;
  font-size: 14px;
}

.form-field {
  height: 46px;
  padding: 0 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  outline: 0;
  transition: .2s;
  margin-top: 20px;
}

.form-field:focus {
  border-color: #0f7ef1;
}

.form > button {
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%, #0097ff 100%);
  border-radius: 3px;
  margin-top: 10px;
  color: #fff;
  letter-spacing: 1px;
  font-family: 'Rubik', sans-serif;
}

.animation {
  animation-name: move;
  animation-duration: .4s;
  animation-fill-mode: both;
  animation-delay: 2s;
}

.a1 {
  animation-delay: 2s;
}

.a2 {
  animation-delay: 2.1s;
}

.a3 {
  animation-delay: 2.2s;
}

.a4 {
  animation-delay: 2.3s;
}

.a5 {
  animation-delay: 2.4s;
}

.a6 {
  animation-delay: 2.5s;
}

@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }

  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@keyframes left {
  0% {
    opacity: 0;
    width: 0;
  }

  100% {
    opacity: 1;
    padding: 20px 40px;
    width: 440px;
  }
}
</style>