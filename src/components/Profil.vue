<template>

    <div class="profile">
        <h1>Profil de {{ user.login }}</h1>
        <div class="profile-interne">
            <div>
                <img src="../assets/profil.png"
                     alt="logo"
                />
            </div>
            <div class="description">
                <div>Votre login : {{ user.login }}</div>
                <div>Votre email : {{ user.email }}</div>
                <div>Votre rôle : {{ user.role }}</div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "profil-vue",
    props: {
        user: {}
    }
}
</script>

<style scoped>
.profile table {
    margin: 0 auto;
}

.profile {
    color: white;
    /*background-color: #000000;*/
    padding: 20px 10px;
    width: 60%;
    height: 400px;
    margin: 0 auto 60px;
    justify-content: center;
    border-radius: 15px;
    border: none;
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0af;
    animation: neon-border 1.5s ease-in-out infinite alternate;
    background: transparent;
}
.profile-interne{
    column-count: 2;

}

.description {
    border-collapse: collapse;
    margin-top: 3em;
    font-family: Arial, sans-serif;
    font-size: 25px;
    text-align: center; /* pour centrer horizontalement */
}

.description div {
    margin-bottom: 15px;
}

img {
    width: 50%;
}

h1 {
    background: linear-gradient(to right, #FF0000, #ffffff, #ff09e4, #ffffff, #0000FF, #4B0082, #8F00FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 45px;
}
</style>