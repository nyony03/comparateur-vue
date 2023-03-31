<template>
    <div>
        <router-link :to="{ name: 'user', params: { id: this.user.id } }">
            <!-- Bouton de retour qui renvoie à la page de la liste des jeux -->
            <button class="buttonRetour">
                <img
                        class="ImageButtonRetour"
                        src="https://cdn-icons-png.flaticon.com/512/61/61449.png"
                />
            </button>
        </router-link>
        <div class="profile">
            <h1>Profile de {{ user.login }}</h1>
            <h1>{{ Option }}</h1>
        </div>

        <div class="container">
      <span
              v-if="hasMessage"
              :error-message="errorMessage"
              :success-message="successMessage"
      ></span>
            <span v-if="showMessage">{{ message }}</span>

            <form action="#" @submit.prevent="submit" method="post">
                <label for="login">{{ Option }} :</label>
                <input type="text" v-model="newPara" id="login" name="login" required />

                <input type="submit" value="Modifier" @click="submit" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "edit-vue",
    data() {
        return {
            user: {},
            users: [],
            Option: "",
            newPara: "",
            hasMessage: false,
            errorMessage: "L'identifiant existe déjà !",
            successMessage: "",
            message: "",
            showMessage: false,
        };
    },
    // Méthode appelée au début
    mounted() {
        this.user = uti.getUser(this.$route.params.id);
        this.users = uti.getListeUser();
        this.Option = this.$route.params.param;
    },
    methods: {
        submit() {
            //appel api pour update
            uti.updateUser(this.user);
        },
    },
}
</script>

<style scoped>
/* boutton retour */
.buttonRetour {
    height: 50px;
    width: 50px;
    background-color: #2534;
    float: left;
    border-radius: 10% 50% 50% 50%;
    border: #2534 1px solid;
    margin: 2px;
}
/* image du bouton retour*/
.ImageButtonRetour {
    width: 30px;
    height: 30px;
}
span {
    color: white;
}

</style>