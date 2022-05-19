<template>
  <div class="Contenedor">
    <CardComic></CardComic>
    <CardComic></CardComic>
    <CardComic></CardComic>
  </div>
</template>

<script>
import CardComic from "../components/CardComic.vue";
import axios from "axios";

export default {
  name: "ComicsHome",
  components: {
    CardComic,
  },
  methods: {
    comicsRecived() {
      axios
        .post(
          "https://93dc-190-25-67-52.ngrok.io/graphql",
          {
            query:
              "query{allComics{idcomic nombre autor fecha direccion etiquetas pdf imagen descripcion }}",
          }
          /*  { query: "mutation{signIn(user:{username:\"a\",password:\"1\"})}"} */
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
  mounted: function () {
    this.comicsRecived();
    console.log("algooo");
  },

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
  padding: 20px 0px 50px 0px;
}
</style>