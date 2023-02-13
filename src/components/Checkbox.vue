<template>
  <div class="select">
    <input
        class="buttonCheck"
        type="checkbox"
        :id="id"
        :value="id"
        v-model="checkedProducts"
    />
    <label for="buttonCheck"></label>
  </div>
</template>

<script>
export default {
  name: "check-box",
  props: {
    id: String
  }
}
</script>

<style scoped>
.select {
  float: none;
  display: table-cell;
  vertical-align: middle;
  z-index: 5;
  outline: none;
  text-decoration: none;
}
input[type="checkbox"] {
  -moz-appearance: none;
  -ms-appearance: none;
  background-color: #363d5d;
  border: 2px solid #0f0f27;
  height: 25px;
  width: 25px;
}
input[type="checkbox"]:checked {
  background-color: #1e212f;
  border: 2px solid #0f0f27;
  /*background-image: url("../assets/logoCheck.png");*/
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 25px;
  width: 25px;
}
input[type="checkbox"]:before {
  font-family: FontAwesome;
  display: block;
  color: grey;
  font-size: 13px;
  position: absolute;
}
input[type="checkbox"]:hover {
  background-color: #363d5d;
  border: 2px solid #0f0f27;
  cursor: pointer;
  height: 25px;
  width: 25px;
}
</style>