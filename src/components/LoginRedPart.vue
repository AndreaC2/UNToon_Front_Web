<template>
  <div class="Contenedor">
    <div class="user">
      <input
        class="userinput"
        type="text"
        placeholder="Usuario"
      />
    </div>
    <div class="user">
      <input
        class="userinput"
        type="password"
        placeholder="Contraseña"
      />
    </div>
    <div>
      <input
        class="Ingresar"
        @click="iniciarsesion"
        type="button"
        value="Ingresar Sesion"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginRed",
  components: {},
  data() {
    return {
      comics: [],
    };
  },
  methods: {
    comicsRecived() {
      axios
        .post("https://93dc-190-25-67-52.ngrok.io/graphql", {
          query: 'mutation{signIn(user:{username:"a",password:"1"})}',
        })
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
  background-color: var(--color_red);
  max-width: 700px;
  margin-left: 100px;
  padding: 50px;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  flex-direction: column;
  align-items: center;
}
.Ingresar {
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
  margin-top: 30px;
}
.user {
 display: flex;
  min-width: 550px;
  min-height: 55.11px;
  background: #ffffff;
  border: 2px solid var(--color_green_1);
  border-radius: 10px;
  margin: 17px;
  align-content: center;
  align-items: center;
}
.userinput {
  border: none;
  background: rgba(0, 0, 0, 0);
  width: 550px;
}

.userinput:focus {
  outline: none;
}
</style>