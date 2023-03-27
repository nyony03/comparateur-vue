<template>
  <div class="container">
    <EventCard v-if="hasMessage" :error-message="errorMessage" :success-message="successMessage" />

    <form action="#" @submit.prevent="submit" method="post">
      <h1>Welcome - Formulaire d'inscription</h1>
      <label for="login">Login :</label>
      <input type="text" v-model="user.login" id="login" name="login" required>
      <label for="email">E-mail :</label>
      <input type="email" v-model="user.email" id="email" name="email" required>
      <label for="password">Mot de passe :</label>
      <input type="password" v-model="user.password" id="password" name="password" required>
      <input type="submit" value="S'inscrire">
    </form>
  </div>
</template>

<script>
import api from "@/script/helper/api";
import EventCard from "@/components/EventCard.vue";

export default {
  name: "InscriptionView",
  components: {EventCard},
  data() {
    return {
      errorMessage: '',
      successMessage: '',
      user: {
        login: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    async submit() {
      await api.registration(this.user)
          .then(() => {
            this.successMessage = 'Votre inscription a été réalisée avec succès';
            setTimeout(() => {
              this.$router.push('/auth');
            }, 2000);
          })
          .catch(() => {
            this.errorMessage = "Veuillez utiliser un autre login";
            console.log(this.errorMessage);
          })
    }
  },
  computed: {
    hasMessage() {
      return this.errorMessage || this.successMessage;
    }
  }
}
</script>

<style scoped>

.container {
  background-color: transparent;
  font-family: Arial, sans-serif;
  color: #fff;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border: 3px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #fff;
}

form {
  background-color: transparent;
  padding: 30px;
  border-radius: 10px;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  margin-bottom: 20px;
}

input[type="text"], input[type="email"], input[type="password"] {
  width: 96%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 10px #fff;
  color: #fff;

}

input[type="submit"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: #ab5f5f;
  box-shadow: 0px 0px 10px #fff;
  color: #fff;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #ab5f5f;
}
</style>