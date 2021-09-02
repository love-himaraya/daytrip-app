<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">(確認用)Home</router-link> |
      <router-link to="/start">(確認用)Start</router-link> |
      <router-link to="/select">(確認用)Select</router-link> |
      <router-link to="/end">(確認用)End</router-link>
    </div>
    <div>
      <!-- router-viewで読み込んだコンポーネントで emit という機能を使うために v-on:set-choice に setChoiceメソッドを登録する -->
      <!-- @ は v-on: の省略形 つまり @set-choice は v-on:set-chice -->
      <!-- : は v-bind: の省略形 つまり :choices は v-bind:choices -->
      <router-view @set-choice="setChoice" :choice="choice" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choice: {
        start: "41",
        select: "",
      },
    }
  },
  methods: {
    setChoice(choicePage, data) {
      // 例えば、 choicePage が "start" だったら、 this.choice.start = data  となる。
      this.choice[choicePage] = data
    },
  },
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
