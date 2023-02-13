<template>
  <div class="Card">
    <div class="Card-content">
      <div class="card-left">
        <h1>{{ name }}</h1>
        <p class="type">#{{type}}</p>
        <p>{{description}}</p>
      </div>
      <div class="card-right" >
        <img v-if="url" :src="url"  />
      </div>
    </div>
  </div>
</template>

<script>
// import CheckBox from "@/components/Checkbox.vue";
export default {
  name: "card-vue",
  components:{
    // CheckBox
  },
  props:{
    id: String,
    url: {type: String, default: ''},
    name: String,
    description: String,
    type: String
  }
}
</script>

<style scoped>
.Card {
  column-count: 2;
  color: white;
  background-color: #000000;
  padding: 20px 10px;
  min-width: 1000px;
  max-width: 1500px;
  margin: 0 auto 20px;
  justify-content: center;
  border-radius: 15px;
}
.Card:hover {
  background-color: #363d5d;
  transform: scale3d(1.05,1.05,1);
  transition: transform 2s ease-in-out;
}

img{
  border-radius: 10px;
}

.Card-content{
  margin: 0 auto;
}
h1 {
  text-decoration: underline;
}
.type {
  font-style: italic;
}

.card-right{
  float: none;
  vertical-align: center;
}

.card-left{
  margin-left: 6rem;
}

.card:hover img { /*6*/
  filter: grayscale(0);
}


</style>