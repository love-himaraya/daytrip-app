<template>
  <div>
    <div v-bind:class="totalTime">{{ totalTime }}</div>
    <button v-on:click="destinationPoint">aaa</button>
  </div>
</template>
<script src="https://maps.googleapis.com/maps/api/directions/json?origin=東京駅&destination=横浜駅&mode=bus&key=AIzaSyCEzByJnyrHErn7CSPrwoh8ToTzPpKyyD0" />
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return { totalTime: "" }
  },
  methods: {
    destinationPoint: function () {
      fetch(
        "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1099759103456456867&categoryId=10"
      )
        .then((res) => {
          return res.json
        })
        .then((data) => {
          console.log(data)
          this.totalTime = data
        })
    },
  },
}
</script>
