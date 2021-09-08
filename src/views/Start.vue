<template>
  <div>
    <div class="start">
      <transition-group appear class="wide">
        <div
          v-bind:id="'start_image_' + index"
          class="select1"
          v-for="(dishCategory, index) in dishCategories"
          v-bind:key="dishCategory.categoryId"
          @click="answer(dishCategory.categoryId)"
        >
          {{ dishCategory.categoryName }}
        </div>
      </transition-group>
    </div>
    <div @click="backToStart" id="aaaa">ホームに戻る</div>
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
    backToStart() {
      this.$router.push("/") //Homeに戻る
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

<style scoped>
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
.start {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.select1 {
  color: white;
  text-shadow: 2px 2px 1px #003366, -2px 2px 1px #003366, 2px -2px 1px #003366,
    -2px -2px 1px #003366, 2px 0px 1px #003366, 0px 2px 1px #003366,
    -2px 0px 1px #003366, 0px -2px 1px #003366;
  display: flex;
  height: 20vw;
  background-color: aquamarine;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 20vw;
  margin: 2vw;
  padding: 1vw;
  transition: all 1s;
  font-size: 2vw;
}
.select1:hover {
  background-color: #cc33ff;
  font-family: "ヒラギノ角ゴ StdN", "Hiragino Kaku Gothic StdN", sans-serif;
  font-size: 2.5vw;
}
.wide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
#start_image_0 {
  background-image: url("https://images.unsplash.com/photo-1608334481162-bba440193a20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80");
  background-position: 50%, 70%;
  background-size: 90%;
}
#start_image_1 {
  background-image: url("https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
  background-size: cover;
}
#start_image_2 {
  background-image: url("https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80");
  background-size: 100%;
}
#start_image_3 {
  background-image: url("https://images.unsplash.com/photo-1543806053-d4617b244862?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80");
  background-size: cover;
}
/* #start_image_4 {
  
  background-image: url("https://images.unsplash.com/photo-1608334481162-bba440193a20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80");
  background-size: cover;
} */
#start_image_5 {
  background-image: url("https://images.unsplash.com/photo-1596352670192-5a95e357df7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80");
  background-position: 50%, 70%;
  background-size: 130%;
}
#start_image_6 {
  background-image: url("https://cdn.pixabay.com/photo/2014/08/02/18/15/fried-408540_1280.jpg");
  background-size: cover;
}
#start_image_7 {
  background-image: url("https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80");
  background-position: 50%, 70%;
  background-size: 120%;
}
#start_image_8 {
  background-image: url("https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg");
  background-position: 50%, 70%;
  background-size: 120%;
}

#aaaa {
  color: red;
}
</style>
