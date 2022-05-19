<template>
  <div class="card"  @click="enviarComic()">
    <img :src="comic.imagen" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">{{ comic.nombre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComic",
  props: ["comic"],
  methods: {
    enviarComic() {
       this.$router.push({ path: 'Comic'})
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
  background-color: var(--color_red);
  border-radius: 0px 0px 25px 25px;
  color: white;
  font-weight: bold;
  font-size: 24px;
}
.card {
  border-radius: 25px;
  max-width: 300px;
  max-height: 250px;
  cursor: pointer;
  margin: 50px;
}
.card-img-top {
  object-fit: cover;
  min-width: 298px;
  min-height: 198px;
  border-radius: 25px 25px 0px 0px;
}
</style>