<template>
  <div class="start">
    <button @click="answer('中華料理')">中華料理</button>
    <button @click="answer('イタリアン')">イタリアン</button>
    <button @click="answer('和食')">和食</button>
    <button @click="answer('郷土料理')">郷土料理</button>
  </div>
</template>

<script>
export default {
  props: {
    choice: Object,
  },
  methods: {
    answer(select) {
      // App.vueのdataをemitという機能を使って変更する。
      // 第一引数("set-cohice")は、使うemitの名前。 App.vue で <router-view @set-choice="setChoice" /> とセットしてる。
      // 第二引数("start")は、emitで発動する関数に渡す第一引数。 setChoice("start","...") となって実行される。
      // 第三引数(select)は、emitで発動する関数に渡す第二引数。 select が '中華料理' だったら setChoice("start","中華料理") となって実行される。
      this.$emit("set-choice", "start", select)
      // "/select" へ遷移する
      this.$router.push("/select")
    },
  },
}
</script>

<style scoped></style>
