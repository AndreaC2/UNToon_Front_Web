<template>
  <div>
    <router-link to="/"></router-link>
    <router-link to="/Profile"></router-link>
    <router-link to="/Login"></router-link>
    <router-link to="/Comic"></router-link>
    <router-link to="/Consume"></router-link>
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
  background-color: var(--color_beige);
}
</style>
