<template>
  <div class="search-form">
    <input type="text" v-model="searchQuery" @input="search" placeholder="Rechercher..." />
    <button type="submit" @click="$emit('search', searchQuery)">
      Rechercher
    </button>
  </div>
  <div v-if="results.length > 0">
    <router-link
        class="router-link"
        v-for="result in results"
        v-bind:key="result._id"
        v-bind:to="{ name: 'GameView', params: { id: result._id } }"
    >
      {{ result.name }}
    </router-link>
  </div>
  <p v-else>Aucun résultat trouvé</p>
</template>

<script>
import api from "@/script/helper/api";

export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: '',
      results: [],
      items:[]
    }
  },
  methods: {
    search() {
      const searchQuery = this.searchQuery.toLowerCase();
      const regex = /^[a-zA-Z]+$/;

      this.results = this.searchQuery
          ? this.items.filter(item => {
            if (regex.test(searchQuery)) {
              return item.name.toLowerCase().startsWith(searchQuery);
            } else {
              return typeof item === 'string' && item.toLowerCase().includes(searchQuery);
            }
          })
          : [];
      console.log(this.results)
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
.search-form {
  display: flex;
  align-items: center;
}

.search-form input[type="text"] {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #333;
  padding: 0.5rem;
  width: 50%;
  font-size: 1.2rem;
  outline: none;
}

.search-form button[type="submit"] {
  background-color: #363d5d;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 1.2rem;
}

.search-form button[type="submit"]:hover {
  background-color: #ddd;
}

.router-link{
  color: white;
}

.results {
  margin-top: 1rem;
}

.no-results {
  margin-top: 1rem;
}
</style>