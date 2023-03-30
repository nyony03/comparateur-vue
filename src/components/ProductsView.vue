

<template>
    <div>
        <h1>Producs View</h1>
        <Jeux :list="liste"></Jeux>
    </div>
</template>

<script>
import api from "./api";
import Jeux from "./Jeux";
export default {
    name: "Card",
    components: {
        Jeux,
    },
    data() {
        return {
            liste: [],
        };
    },
    mounted() {
        this.liste = api.getList();
    },
};
</script>

<style scoped>
.Card {
    column-count: 3;
    color: white;
    background-color: #363d5d;
    padding: 10px;
    margin: 0 auto 15px;
    min-width: 1000px;
    max-width: 1500px;
}
.Card:hover {
    background-color: #5d658e;
}
h1 {
    text-decoration: underline;
}
.tag {
    font-style: italic;
}
</style>