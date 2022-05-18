<template>
  <NavBar></NavBar>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
*{
  --color_red: #B32D43;
  --color_beige: #F2E8CF;
  --color_green_1: #94B43B;
  --color_green_2: #A7D757;
}
body{
  margin: 0%;
}
</style>
