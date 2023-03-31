<template>
    <div id="app">
        <!--<h1>Coucou</h1>-->
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
body {
    background-color: #1e212f;
}

.fade-enter-active {
    transition: all 0.3s ease;
    transition-delay: 0.3s;
}
.fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
