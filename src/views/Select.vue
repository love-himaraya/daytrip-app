<template>
  <div>
    <div class="select">
      <div
        class="select2"
        v-for="category in categories"
        v-bind:key="category.categoryId"
        @click="answer(category.categoryId)"
      >
        {{ category.categoryName }}
      </div>
    </div>
    <div @click="backToStart">ホームに戻る</div>
  </div>
</template>

<script>
// import { getRecipeRanking } from "@/components/get-ranking"
export default {
  props: ["choice"],
  data: function () {
    return {
      categories: [],
    }
  },
  methods: {
    answer(select) {
      this.$emit("set-choice", "select", select)
      this.$router.push("/end")
    },
    backToStart() {
      this.$router.push("/") //Homeに戻る
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
        // console.log(data.result.medium)
        // console.log(this.choice.start)
        let temp = []
        for (let i = 0; i < data.result.medium.length; i++) {
          if (data.result.medium[i].parentCategoryId == this.choice.start) {
            // console.log(data.result.medium[i].categoryName)
            temp.push(data.result.medium[i])
          }
        }
        this.categories = temp
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
.select {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.select2 {
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
.select2:hover {
  background-color: #cc33ff;
  font-family: "ヒラギノ角ゴ StdN", "Hiragino Kaku Gothic StdN", sans-serif;
  font-size: 1.2rem;
}
</style>
