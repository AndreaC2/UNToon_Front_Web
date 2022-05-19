<template>
  <div>
    <NavBar></NavBar>
    <div class="comic">
      <h1 class="title"></h1>
      <div class="visor">
        <VisorPDF></VisorPDF>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import VisorPDF from "../components/VisorPDF.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "Comic",
  props: ["comic"],
  components: {
    NavBar,
    VisorPDF,
  },
};
</script>

<style scoped>
.comic {
  display: block;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.title{
  color: var(--color_red);
  margin: 5%;
  font-weight: bold;
  font-size: 24px;
  }
</style>