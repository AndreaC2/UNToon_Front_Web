<template>
  <div class="Contenedor">
    <ul class="lista">
      <li v-for="item in comics" :key="item">
        <CardComic :comic="item" />
      </li>
    </ul>
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
  data() {
    return {
      comics: [],
    };
  },
  methods: {
    comicsRecived() {
      axios
        .post(
          "https://674e-190-24-109-109.ngrok.io/graphql",
          {
            query:
              "query{allComics{idcomic nombre autor fecha direccion etiquetas pdf imagen descripcion }}",
          }
          /*  { query: "mutation{signIn(user:{username:\"a\",password:\"1\"})}"} */
        )
        .then((response) => {
          console.log(response.data.data.allComics);
          this.comics = response.data.data.allComics;
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
  display: flex;
  justify-items: center;
  justify-self: center;
  max-width: 80%;
  padding: 50px;
  margin-left: 240px;
}
.lista {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
}
</style>