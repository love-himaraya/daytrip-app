<template>
  <div class="start_select">
    <transition-group appear>
      <div
        class="select1"
        v-for="dishCategory in dishCategories"
        v-bind:key="dishCategory.categoryId"
        @click="answer(dishCategory.categoryId)"
      >
        {{ dishCategory.categoryName }}
      </div>
    </transition-group>
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
      // 第二引数("start&select")は、emitで発動する関数に渡す第一引数。 setChoice("start","...") となって実行される。
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
        console.log(data.result.large)
        for (let i = 0; i < data.result.large.length; i++) {
          if (
            i === 24 ||
            i === 5 ||
            i === 6 ||
            i == 7 ||
            i === 22 ||
            i == 27 ||
            i == 28 ||
            i == 29 ||
            i == 21
          )
            // console.log(data.result.large[i])
            temp.push(data.result.large[i])
        }
        this.dishCategories = temp
      })
  },
}
</script>

<style>
.all__home {
  display: flex;
  justify-content: center;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s;
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
.start_select {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.select1 {
  display: flex;
  height: 20vw;
  background-color: aquamarine;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 20vw;
  font-size: 1rem;
  margin: 5vw;
  transition: all 1s;
}
.select1:hover {
  background-color: #cc33ff;
  font-family: "ヒラギノ角ゴ StdN", "Hiragino Kaku Gothic StdN", sans-serif;
  font-size: 1.2rem;
}
</style>
