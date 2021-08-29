<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png" /-->
    <Start msg="Please select a category." />
  </div>
</template>

<script>
// @ is an alias to /src
import Start from "@/components/Start.vue"

export default {
  name: "Home",
  components: {
    Start,
  },
}
</script>
