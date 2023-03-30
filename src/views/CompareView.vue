<template>
  <div class="home">
    <div id="app">
      <ProductCompare />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductCompare from "@/components/ProductsCompare.vue";

export default {
  name: 'ProductViewCompare',
  components: {
    ProductCompare

  }
}
</script>

<style scoped>

</style>
