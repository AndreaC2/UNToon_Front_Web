<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/Profile">Profile</router-link>
    <router-link to="/Login">Login</router-link>
    <router-link to="/Comic">comic</router-link>
    <router-view />
  </div>
</template>


<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {},
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
