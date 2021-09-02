<template>
  <div class="end">
    <div v-for="(dish, index) in dishes" v-bind:key="index">
      <A v-bind:HREF="dish.recipeUrl"
        ><img v-bind:src="dish.foodImageUrl" alt=""
      /></A>
    </div>

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
      for (let i = array.length - 1; 0 < i; i--) {
        // 0〜(i+1)の範囲で値を取得
        let r = Math.floor(Math.random() * (i + 1))

        // 要素の並び替えを実行
        let tmp = array[i]
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
  async created() {
    const res = await fetch(
      `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=${this.choice.start}-${this.choice.select}`
    )
    const data = await res.json()
    console.log(data)
    this.dishes = data.result
  },
}
</script>

<style scoped></style>
