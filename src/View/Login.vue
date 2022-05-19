<template>
  <div class="login">
    <div class="aux">
      <img class="img" src="../assets/LogoToon.png" />
    </div>
    <div>
      <LoginRed/>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginRed from "../components/LoginRedPart.vue"
export default {
  name: "Login",
  components: {
    LoginRed
  },
};
</script>

<style scoped>
.aux{
  max-width: 1000px;
}
.img {
  object-fit: cover;
  max-width: 600px;
  margin: 150px 80px 80px 150px;
}
.login {
  display: block;
  margin-left: 25%;
}
.title {
  color: var(--color_red);
  margin: 5%;
  font-weight: bold;
  font-size: 24px;
}
</style>