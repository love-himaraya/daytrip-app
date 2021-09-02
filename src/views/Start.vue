<template>
  <div class="start">
    <button
      v-for="dishCategory in dishCategories"
      v-bind:key="dishCategory.categoryId"
      @click="answer(dishCategory.categoryId)"
    >
      {{ dishCategory.categoryName }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    choice: Object,
  },
  data: function () {
    return { dishCategories: [] }
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
  created() {
    fetch(
      "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1005863942230053395&categoryType=large"
    )
      .then((rea) => {
        return rea.json()
      })
      .then((data) => {
        let temp = []
        for (let i = 0; i < data.result.large.length; i++) {
          console.log(data.result.large[i])
          temp.push(data.result.large[i])
        }
        this.dishCategories = temp
      })
  },
}
</script>

<style scoped></style>
