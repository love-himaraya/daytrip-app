<template>
  <div class="select">
    <button
      v-for="category in categories"
      v-bind:key="category.categoryId"
      @click="answer(category.categoryId)"
    >
      {{ category.categoryName }}
    </button>
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

<style scoped></style>
