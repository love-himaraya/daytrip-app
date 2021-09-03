<template>
  <div class="all__home">
    <div>
      <transition mode="out-in" appear>
        <div class="toStart">
          <router-link to="/start">ここをタッチ！</router-link>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
}
</script>
<style scoped>
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 2s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 2s;
}
.v-leave-to {
  opacity: 1;
}
.toStart {
  display: flex;
  height: 50rem;
  background-color: aquamarine;
  border-radius: 100%;
  justify-content: center;

  line-height: 50rem;
  font-size: 2rem;
}
</style>
