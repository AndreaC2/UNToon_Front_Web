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
            <th>id</th>
            <th>nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comunity in comunities" v-bind:key="comunity">
            <td>{{ comunity.id }}</td>
            <td>{{ comunity.Nombre }}</td>
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
      headers: ["id", "Nombre"],
      comunities: [{}],
    };
  },
  methods: {
    comunitiesRecived() {
      Object.assign(this.$data, this.$options.data());
      for (var i = 1; i <= 3; i++) {
        axios
          .get("https://9817-186-118-24-19.ngrok.io/comunity/" + i + "/")
          .then((response) => {
            console.log(response);
            this.$data.comunities.push({id: response.data.id, Nombre: response.data.comunidad}); 
          })
          .catch((error) => {
            if (error.response) {
              console.log(error)
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          }); 
      }
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