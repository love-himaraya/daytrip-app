<template>
  <div>
    <h1>オススメのレシピはこちら！</h1>
    <div class="end">
      <div v-for="(dish, index) in dishes" v-bind:key="index">
        <a v-bind:href="dish.recipeUrl" class="dish__wrapper">
          <p class="dishTitle">{{ dish.recipeTitle }}</p>
          <div class="image-wrap">
            <img v-bind:src="dish.foodImageUrl" alt="" />
          </div>
        </a>
      </div>
      <div>
        <div v-if="!dishes">
          <div v-show="!(this.choice.start && this.choice.select)">
            エラーがおきました。メニューを正しく選択してください。
          </div>
          <div v-show="this.choice.start && this.choice.select">
            エラーがおきました。<br />5秒ほどおいて再取得ボタンを押して下さい...。
          </div>
          <button
            class="nav-button nav-button--reset"
            @click="fetchDish"
            v-show="this.choice.start && this.choice.select"
          >
            再取得
          </button>
        </div>
        <button class="nav-button">
          <router-link to="/">ホームに戻る</router-link>
        </button>
        <button class="nav-button">
          <router-link to="/start">メニューを選び直す</router-link>
        </button>
      </div>
    </div>
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
    async fetchDish() {
      const res = await fetch(
        `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=${this.choice.start}-${this.choice.select}`
      )
      const data = await res.json()
      this.dishes = data.result
    },
  },
  async created() {
    await this.fetchDish()
  },
}
</script>
<style scoped>
.end {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.image-wrap {
  width: 700px;
  position: relative;
  overflow: hidden;
  padding-top: 70%;
  margin: 5px, 5px, 10px, 5px;
}

.image-wrap:hover {
  opacity: 0.8;
}

.image-wrap img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 60%;
  height: 80%;
  border-radius: 50%;
}

.dish__wrapper {
  color: #264653;
}
.dish__wrapper:hover {
  opacity: 0.8;
}

.dishTitle {
  font-family: "ヒラギノ角ゴ StdN", "Hiragino Kaku Gothic StdN", sans-serif;
  font-size: 1.2rem;
}

.dishTitle:hover {
  opacity: 0.8;
}

.nav-button {
  color: red;
  border-width: 0px;
  border: none; /* 枠線を消す */
  outline: none; /* クリックしたときに表示される枠線を消す */
  background: transparent; /* 背景の灰色を消す */
  font-size: 18px;
}

.nav-button:hover {
  opacity: 0.8;
}

.nav-button--reset {
  border: 1px solid red;
  padding: 1rem 2rem;
}

a {
  text-decoration: none;
}
</style>
