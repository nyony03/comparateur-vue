<template>
  <div>
    <NavBarView/>
    <transition name="fade">
      <router-view/>
    </transition>
<!--    {{ count }}-->
    <FooterView/>
  </div>

</template>

<script>
import NavBarView from "@/views/NavBarView.vue";
import FooterView from "@/views/FooterView.vue";
import store from './main.js';

  export default {
    name: 'App',
    store,
    components: {
      NavBarView,
      FooterView
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  /*background-color: #1e212f;*/
  background-image: url("assets/composition-abstraite-lumiere-ultraviolette-uv.jpg");

}

.fade-enter-active {
  transition: all 0.2s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
