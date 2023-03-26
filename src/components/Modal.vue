<template>
  <transition name="modal">
  <div class="modal-mask" v-if="isOpen">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close-modal')">
              X
            </button>
          </slot>
        </div>
        <h1>Créer un jeu</h1>

        <form class="modal-body" @submit.prevent="submitForm">
          <label for="name">Nom:</label>
          <input type="text" id="name" v-model="name" required>

          <label for="description">Description:</label>
          <textarea id="description" v-model="description" required></textarea>

          <label for="type">Type:</label>
          <select id="type" v-model="type" required>
            <option value="">--Sélectionnez un type--</option>
            <option value="aventure">Aventure</option>
            <option value="romantique">Romantique</option>
            <option value="action">Action</option>
          </select>

          <label for="platform">Plateforme:</label>
          <input type="text" id="platform" v-model="platform" required>

          <label for="price">Prix:</label>
          <input type="text" id="price" v-model="price" required>

          <label for="url">URL pour home:</label>
          <textarea id="url" v-model="url" required></textarea>

          <label for="url2">URL pour page description:</label>
          <textarea id="url2" v-model="url2" required></textarea>

          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import api from "@/script/helper/api"

export default {

  name: "modal-vue",
  data() {
    return {
      name: '',
      description: '',
      type: '',
      platform: '',
      price: '',
      url: '',
      url2: ''
    }
  },
  props: {
    isOpen: Boolean,
    title: String
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
      location.reload()
    },
    async submitForm() {
      const game = {
        name: this.name,
        description: this.description,
        type: this.type,
        platform: this.platform,
        price: this.price,
        url: this.url,
        url2: this.url2
      };
      // Envoyer les données du formulaire
      let token = this.$store.getters.getToken
      await api.createGame(game, token)
      console.log(game);
      this.closeModal()
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 30em;
  margin: 0em auto;
  padding: 1.250em 1.875em;
  background-color: #fff;
  border-radius: 0.125em;
  box-shadow: 0 0.125em 0.500em rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}


.modal-body {
  margin: 1.250em 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

 form {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 50px;
   font-family: Arial, sans-serif;
   font-size: 1em;
 }

label {
  margin-top: 10px;
  margin-bottom: 5px;
}

input[type="text"], textarea, select, input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 15px;
  font-size: 16px;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

</style>