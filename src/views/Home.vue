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
        "https://maps.googleapis.com/maps/api/directions/json?origin=東京駅&destination=横浜駅&key=AIzaSyCEzByJnyrHErn7CSPrwoh8ToTzPpKyyD0"
      ).then((data) => {
        this.totalTime = data.routes.legs.distance.text
      })
    },
  },
}
</script>
