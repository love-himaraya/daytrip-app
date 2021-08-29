<template>
  <div>
    <div v-bind:class="totalTime">{{ totalTime }}</div>
    <button v-on:click="timeToCook">所要時間</button>
    <div v-bind:class="dishName">{{ dishName }}</div>
    <button v-on:click="dishNameHyouji">料理名</button>
  </div>
</template>
<script>
// @ is an alias to /src
import {
  getFrenchRecipeRanking,
  getChineseRecipeRanking,
} from "@/components/get-ranking.js"

export default {
  name: "Home",

  data() {
    return { totalTime: "", dishName: "", dishMaterial: "" }
  },
  methods: {
    timeToCook: function () {
      getChineseRecipeRanking().then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          let recipeIndication = data.result[i].foodImageUrl
          this.totalTime += recipeIndication
        }
      })
    },
    getFrench: function () {
      getFrenchRecipeRanking().then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          let recipeIndication = data.result[i].foodImageUrl
          this.dishName += recipeIndication
        }
      })
    },
    dishNameHyouji: function () {
      fetch(
        "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1005863942230053395&categoryType=large"
      )
        .then((rea) => {
          return rea.json()
        })
        .then((datas) => {
          console.log(datas)
        })
    },
  },
}
</script>
