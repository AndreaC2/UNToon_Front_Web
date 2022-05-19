<template>
  <div>
    <NavBar></NavBar>
    <div class="visor">
      <VisorPDF></VisorPDF>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import VisorPDF from "../components/VisorPDF.vue"

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "Comic",
  components: {
    NavBar,
    VisorPDF
  },
}
</script>

<style>
.visor{
  max-width: 80%;
}
</style>