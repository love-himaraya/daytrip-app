<template>
  <div class="select">
    <h1>{{ msg }}</h1>
    <button><router-link to="/end">小籠包</router-link></button>
    <button><router-link to="/end">麻婆豆腐</router-link></button>
    <button><router-link to="/end">チンジャオロース</router-link></button>
    <button><router-link to="/end">北京ダック</router-link></button>
  </div>
</template>

<script>
export default {
  name: "Select",
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
