<template>
  <div class="navbar">
    <div class="aux">
      <img class="img" src="../assets/LogoBeige.png" />
    </div>
    <img class="img" src="../assets/UserBeige.png" />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  /* props: {
  } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  height: 65px;
  background-color: var(--color_green_1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.aux {
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.img {
  height: 55px;
}
</style>