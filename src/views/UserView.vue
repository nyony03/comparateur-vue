<template>
  <ProfilVue :user="user" />
</template>

<script>
import ProfilVue from "@/components/Profil.vue";

export default {
    name: "UserView",
    components: {ProfilVue},
    data() {
        return {
            user: [],
        };
    },
    mounted(){
        this.getUser()
    },
    methods: {
        getUser() {
            console.log(this.$store.getters.getUser)
            this.user = this.$store.getters.getUser
            console.log(this.user)
        }
    }
}

</script>

<style scoped>

</style>