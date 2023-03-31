<template>
    <div>
        <router-link :to="{ name: 'ProductsView' }">
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

            <table>
                <tbody>
                <tr>
                    <th>ID :</th>
                    <td>{{ user.id }}</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Login :</th>
                    <td>{{ user.login }}</td>
                    <td>
                        <router-link
                                :to="{ name: 'edit', params: { id: user.id, param: login } }"
                        >
                            <!-- Bouton de retour qui renvoie à la page de la liste des jeux -->
                            <button class="editLogin">
                                <p>Modifier</p>
                            </button>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th>Email :</th>
                    <td>{{ user.email }}</td>
                    <router-link
                            :to="{ name: 'edit', params: { id: user.id, param: email } }"
                    >
                        <td><button @click="editUser('email')">Modifier</button></td>
                    </router-link>
                </tr>
                <tr>
                    <th>Role :</th>
                    <td>{{ user.role }}</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Mot de passe :</th>
                    <td>*********</td>
                    <!--<router-link
                      :to="{ name: 'edit', params: { id: user.id, param: mdp } }"
                    >-->
                    <td><button @click="editUser('mdp')">Modifier</button></td>
                    <!--</router-link>-->
                </tr>
                </tbody>
            </table>
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
            login: "login",
            email: "email",
            mdp: "mdp",
            user: [],
        };
    },
    // Méthode appelée au début
    mounted() {
        this.user = uti.getUser(this.$route.params.id);
    },
};
</script>

<style scoped>
.profile table {
    margin: 0 auto;
}

.buttonRetour {
    height: 50px;
    width: 50px;
    background-color: #2534;
    float: left;
    border-radius: 10% 50% 50% 50%;
    border: #2534 1px solid;
    margin: 2px;
}

.ImageButtonRetour {
    width: 30px;
    height: 30px;
}

.h1 {
    color: red;
}
.profile {
    max-width: 800px;
    margin: 0 auto;
    background-color: cornsilk;
    padding-top: 5px;
    padding-bottom: 20px;
}

.user-info {
    border: 1px solid #ccc;
    padding: 20px;
    margin-top: 20px;
    color: blue;
}

table {
    border-collapse: collapse;
    margin: 20px;
    font-family: Arial, sans-serif;
    font-size: 14px;
}

tbody:first-child tr {
    background-color: #f2f2f2;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #4CAF50;
    color: white;
    text-align: left;
    min-width: 100px;
}

th:first-child {
    position: sticky;
    left: 0;
    z-index: 1;
}

tbody:not(:first-child) td:first-child {
    font-weight: bold;
    background-color: #f2f2f2;
}

tbody tr:hover {
    background-color: #ddd;
}
</style>