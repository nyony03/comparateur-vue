<template>
  <div class="home">
    <div id="app">
      <ProductView/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductView from "@/components/Products.vue";


export default {
  name: 'HomeView',
  components: {
    ProductView
  }
}
</script>

<style scoped>

</style>
