<template>
  <div class="start">
    <h1>{{ msg }}</h1>
    <button><router-link to="/select">中華料理</router-link></button>
    <button><router-link to="/select">イタリアン</router-link></button>
    <button><router-link to="/select">和食</router-link></button>
    <button><router-link to="/select">郷土料理</router-link></button>
  </div>
</template>

<script>
export default {
  name: "Start",
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
