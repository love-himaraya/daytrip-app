<template>
  <div>
    <transition-group appear class="select">
      <div
        v-bind:id="'select_image_' + index"
        class="select2"
        v-for="(category, index) in categories"
        v-bind:key="category.categoryId"
        :style="{
          backgroundImage: `url(${categories[index].image})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }"
        @click="answer(category.categoryId)"
      >
        {{ category.categoryName }}
      </div>
    </transition-group>
    <div @click="backToStart">ホームに戻る</div>
  </div>
</template>
<script>
// import { getRecipeRanking } from "@/components/get-ranking"
export default {
  props: ["choice"],
  data: function () {
    return {
      // categories: [],
      categories: [{ image: "" }],
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
        console.log(data.result.medium)
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
      .then(async () => {
        for (let n = 0; n < this.categories.length; n++) {
          fetch(
            `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=${this.choice.start}-${this.categories[n].categoryId}`
          )
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              let ddata = data.result
              console.log(ddata)
              this.categories[n].image = ddata[1].foodImageUrl
              console.log(this.categories[n].image)
            })
          await new Promise((s) => setTimeout(s, 1300))
          this.categories.splice()
        }
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.select2 {
  color: white;
  text-shadow: 2px 2px 1px #003366, -2px 2px 1px #003366, 2px -2px 1px #003366,
    -2px -2px 1px #003366, 2px 0px 1px #003366, 0px 2px 1px #003366,
    -2px 0px 1px #003366, 0px -2px 1px #003366;
  display: flex;
  height: 20vw;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  width: 20vw;
  margin: 2vw;
  padding: 1vw;
  transition: all 1s;
  font-size: 2vw;
}
.wide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.select2:hover {
  background-color: #cc33ff;
  font-family: "ヒラギノ角ゴ StdN", "Hiragino Kaku Gothic StdN", sans-serif;
  font-size: 2.5vw;
}
</style>
