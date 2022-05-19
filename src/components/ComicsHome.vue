<template>
  <div class="Contenedor">
    <CardComic></CardComic>
    <CardComic></CardComic>
    <CardComic></CardComic>
  </div>
</template>

<script>
import CardComic from "../components/CardComic.vue";

export default {
  name: "ComicsHome",
  components: {
    CardComic,
  }
  /* props: {
  } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Contenedor {
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  padding: 20px 0px 50px 0px;
}
</style>