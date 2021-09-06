<template>
  <div>
    <h1>今日のご飯はなんだろな？</h1>
    <div class="all__home">
      <div>
        <transition mode="out-in" name="start" appear>
          <div class="toStart" @click="toStart">ここをタッチ！</div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    toStart() {
      this.$router.push("/start") //Homeに戻る
    },
  },
}
</script>
<style scoped>
.all__home {
  display: flex;
  justify-content: center;
}

.toStart {
  display: flex;
  height: 50vw;
  background-color: aquamarine;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 50vw;
  font-size: 1rem;
  margin: 20vw;
  transition: all 2s;
}
.toStart:hover {
  background-color: #cc33ff;
  font-family: "ヒラギノ角ゴ StdN", "Hiragino Kaku Gothic StdN", sans-serif;
  font-size: 2rem;
}
.start-enter {
  opacity: 0;
}
.start-enter-active {
  transition: opacity 3s;
}
.start-enter-to {
  opacity: 1;
}
.start-leave {
  opacity: 1;
}
.start-leave-active {
  transition: opacity 2s;
}
.start-leave-to {
  opacity: 1;
}
</style>
