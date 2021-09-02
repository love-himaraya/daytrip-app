<template>
  <div class="end">
    <button
      v-for="dish in shuffledDishes"
      v-bind:key="dish.categoryId"
      @click="answer(dish.categoryUrl)"
    >
      {{ dish.categoryUrl }}
    </button>
    <button v-on:click="shuffleDish">メニューを表示</button>
    <button @click="backToStart">ホームに戻る</button>
  </div>
</template>

<script>
// import { getRecipeRanking } from "@/components/get-ranking"
export default {
  props: ["choice"],
  data: function () {
    return {
      //categories: [],
      dishes: [],
      number: 0,
      shuffledDishes: [],
    }
  },
  functions: {
    shuffle(array) {
      for (var i = array.length - 1; 0 < i; i--) {
        // 0〜(i+1)の範囲で値を取得
        var r = Math.floor(Math.random() * (i + 1))

        // 要素の並び替えを実行
        var tmp = array[i]
        array[i] = array[r]
        array[r] = tmp
      }
      return array
    },
  },

  methods: {
    answer(select) {
      this.$emit("set-choice", "end", select)
    },
    backToStart() {
      this.$router.push("/") //Homeに戻る
    },
    shuffleDish() {
      this.shuffledDishes = this.shuffle(this.dishes)
    },
  },
  created() {
    fetch(
      "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1005863942230053395&categoryType=medium"
    )
      .then((rea) => {
        return rea.json()
      })
      .then((data) => {
        console.log(this.choice.start, this.choice.select)
        let temp = []
        for (let i = 0; i < data.result.medium.length; i++) {
          for (let j = 0; i < data.result.small.length; i++) {
            if (
              data.result.medium[i].parentCategoryId == this.choice.start &&
              data.result.small[j] == this.choice.select
            ) {
              //temp.push(data.result.medium[i])
              temp.push(
                "https://recipe.rakuten.co.jp/category/$(data.result.large)-$(data.result.medium[i])-$(data.result.small[j])/"
              )
            }
          }
        }
        this.dishes = temp
      })
  },
}
</script>

<style scoped></style>
