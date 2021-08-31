<template>
  <div class="select">
    <button @click="answer('小籠包')">小籠包</button>
    <button @click="answer('麻婆豆腐')">麻婆豆腐</button>
    <button @click="answer('チンジャオロース')">チンジャオロース</button>
    <button @click="answer('北京ダック')">北京ダック</button>
  </div>
</template>

<script>
export default {
  methods: {
    answer(select) {
      this.$emit("set-choice", "end", select)
      this.$router.push("/end")
    },
  },
}
</script>

<style scoped></style>
