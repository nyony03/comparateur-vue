<template>
    <div>
        <button v-if="isConnected" @click="showModal = true" class="neon-button">Créer un jeu</button>

        <div class="message" v-if="selectedItems.length === 2">
            <h2>Vous voulez comparer "{{selectedItems[0].name}}" et "{{selectedItems[1].name}}"</h2>
            <button class="btn" @click="compareGames">Comparer les 2 jeux</button>
        </div>
        <p v-if="selectedItems.length < 2" class="choiceCompare">
            veuillez cliquer sur les 2 jeux à comparer
        </p>
        <div class="card" v-for="item in items" :key="item._id">
            <card
                    :id="item._id"
                    :url="item.url"
                    :name="item.name"
                    :description="item.description"
                    :type="item.type"
                    :item="item"
                    @select-item="selectItem"
                    @click="addToSelectedItems(item)"
            />
        </div>
        <ModalVue
                :is-open="showModal"
                @close-modal="showModal = false"
                :selectedItem="selectedItem"
        />
    </div>
</template>


<script>
import card from "@/components/Card.vue";
import api from "@/script/helper/api"
import {mapState} from "vuex";
import ModalVue from "@/components/Modal.vue";

export default {
    name: "productCompare",
    components: {
        ModalVue,
        card
    },
    computed: {
        ...mapState(['isConnected'])
    },
    data() {
        return {
            items: [],
            showModal: false,
            selectedItem: null,
            selectedItems: []
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
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
            this.showModal = true;
        },
        addToSelectedItems(item) {
            if (this.selectedItems.length < 2 && !this.selectedItems.includes(item)) {
                this.selectedItems.push(item);
            }
        },
        openModal() {
            this.selectedItem = null;
            this.showModal = true;
        },
        async compareGames() {
            if (this.selectedItems.length === 2) {
                try{
                    this.$router.push({ name: 'compareId', params: {idJ1: this.selectedItems[0]._id, idJ2: this.selectedItems[1]._id} });
                }catch (e) {
                    console.log(e.message)
                }
            }
        },
    },
}
</script>

<style scoped>
.card {
    color: inherit;
}

.neon-button {
    background-color: #1e7043;
    color: #fff;
    font-size: 1.5em;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    box-shadow: 0 0 15px #ffffff;
    text-shadow: 0 0 10px #000000;
    transition: all 0.3s ease-in-out;
    margin-bottom: 50px;
}

.neon-button:hover {
    background-color: #52b07d;
    color: #ffffff;
    box-shadow: 0 0 15px #52b07d;
    text-shadow: 0 0 10px;
}

h1 {
    color: white;
    margin-bottom: 30px;
}
h2{
    color: white;
}

.btn{
    background-color: #e15e5e;
    color: #fff;
    box-shadow: 0 0 10px #e15e5e;
    font-size: 2em;
}
.choiceCompare {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.message{
    margin-bottom: 1.5em;
}


</style>