<template>
  <div class="card" :class="{'error': hasError, 'success': hasSuccess}">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <div v-if="hasError" class="error-message">{{ errorMessage }}</div>
      <div v-else-if="hasSuccess" class="success-message">{{ successMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    errorMessage: {
      type: String,
      default: '',
    },
    successMessage: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasError() {
      return this.errorMessage !== '';
    },
    hasSuccess() {
      return this.successMessage !== '';
    },
  },
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.card.error {
  border-color: #f00;
}

.card.success {
  border-color: #0f0;
}

.error-message {
  color: #f00;
}

.success-message {
  color: #0f0;
}
</style>