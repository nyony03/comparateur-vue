<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button class="modal-close" @click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-vue",
  props: {
    isOpen: Boolean,
    title: String
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style scoped>

</style>