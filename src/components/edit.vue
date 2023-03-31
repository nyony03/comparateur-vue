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
// Importation de l'API et du composant Jeux
import uti from "./uti";
//import profile from "./profile";
export default {
    // Nom du composant
    name: "user",
    // Composants utilisés dans ce composant
    components: {
        //profile,
    },
    // Données de ce composant
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
            let loginExists = false;
            let emailExists = false;

            if (this.Option === "login") {
                if (this.newPara !== this.user.login) {
                    // Vérification seulement si le login a été modifié
                    for (let i = 0; i < this.users.length; i++) {
                        if (this.users[i].login === this.newPara) {
                            loginExists = true;
                        }
                    }
                }

                if (loginExists) {
                    this.showMessage = true;
                    this.message = "L'identifiant existe déjà !";
                    console.log("L'identifiant existe déjà !");
                    return;
                }
                this.user.login = this.newPara;
            }
            if (this.Option === "email") {
                if (this.newPara !== this.user.email) {
                    // Vérification seulement si le login a été modifié
                    for (let i = 0; i < this.users.length; i++) {
                        if (this.users[i].email === this.newPara) {
                            emailExists = true;
                        }
                    }
                }
                if (emailExists) {
                    this.showMessage = true;
                    this.message = "Cette email est déjà attribué !";
                    console.log("L'identifiant existe déjà !");
                    return;
                }
                this.user.email = this.newPara;
            }

            this.showMessage = true;
            this.message = "Modification enregistrée";
            console.log("Modification enregistrée");
            uti.updateUser(this.user);
        },
    },
};
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