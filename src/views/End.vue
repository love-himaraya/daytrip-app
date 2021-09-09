<template>
  <div class="end">
    <div v-for="(dish, index) in dishes" v-bind:key="index">
      <div class="flex-item">
        <div class="image-wrap">
          <a v-bind:href="dish.recipeUrl"
            ><img v-bind:src="dish.foodImageUrl" alt=""
          /></a>
          <p class="dishTitle">{{ dish.recipeTitle }}</p>
        </div>
      </div>
    </div>

    <button class="homeButton">
      <router-link to="/">ホームに戻る</router-link>
    </button>
    <button class="startButton">
      <router-link to="/start">メニューを選び直す</router-link>
    </button>
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
<style scoped>
.flex-item {
  flex-basis: 100%;
}

.image-wrap {
  position: relative;
  overflow: hidden;
  padding-top: 60%;
  margin: 10px 5px;
}

.image-wrap img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 80%;
  border-radius: 50%;
}

.dishTitle {
  font-family: "ヒラギノ角ゴ StdN", "Hiragino Kaku Gothic StdN", sans-serif;
  font-size: 1.2rem;
}
</style>
