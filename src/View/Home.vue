<template>
  <div class="aux">
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <ComicsHome></ComicsHome>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SearchBar from "../components/SearchBar.vue";
import ComicsHome from "../components/ComicsHome.vue"

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "Home",
  components: {
    NavBar,
    SearchBar,
    ComicsHome
  },
};
</script>

<style scoped>
body{
  display: flex;
  align-items: center; 
  justify-content: center
}
.aux{
  background-color: var(--color_beige);
  min-height: 900px;
}
</style>
