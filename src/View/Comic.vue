<template>
  <div>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "Comic",
  components: {
    NavBar
  },
};
</script>

<style>
* {
  --color_red: #b32d43;
  --color_beige: #f2e8cf;
  --color_green_1: #94b43b;
  --color_green_2: #a7d757;
}
body {
  margin: 0%;
}
</style>