<template>
  <div>
    <input
      class="boton"
      @click="comunitiesRecived"
      type="button"
      value="Consume"
    />
    <div class="table">
      <table class="table bordered striped">
        <thead>
          <tr>
            <th>String1</th>
            <th>String2</th>
            <th>String3</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comunity in comunities" v-bind:key="comunity">
            <td>{{ comunity.nombre }}</td>
            <td>{{ comunity.descripcion }}</td>
            <td>{{ comunity.ultimo}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ConsumeTable",
  components: {},
  data() {
    return {
      comunities: [
        {
          nombre: "un nombre",
          descripcion: "una descripcion",
          ultimo: "holaa",
        },
        {
          nombre: "un nombre 2",
          descripcion: "una descripcion",
          ultimo: "holaa",
        },
      ],
    };
  },
  methods: {
    comunitiesRecived() {
      axios.post(
        "https://a092-190-24-109-109.ngrok.io",
        {
          query:
            "query{allComics{idcomic nombre autor fecha direccion etiquetas pdf imagen descripcion }}",
        }
        /*  { query: "mutation{signIn(user:{username:\"a\",password:\"1\"})}"} */
      );
      /*.then((response) => {
          //console.log(response.data.data.allComics);
          //this.comics = response.data.data.allComics;
        });*/
    },
  },
};
</script>

<style scoped>
.boton {
  background-color: var(--color_green_1);
  width: 150px;
  height: 35px;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 20px;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 30px;
}
</style>