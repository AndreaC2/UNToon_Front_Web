<template>
  <div class="searchBar">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-9">
        <div class="form">
          <i class="fa fa-search" data-src ="../assets/SearchRed.png"></i>
          <input
            type="text"
            class="form-control form-input"
            placeholder="Buscar Comics"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  /* props: {
  } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #ffffff;
}
.form {
  margin: 50px;
}
.form .fa-search {
  position: absolute;
  top: 20px;
  left: 20px;
}

.form-input {
  height: 55px;
  text-indent: 33px;
  border-radius: 10px;
  border-width: 2px;
  border-color: var(--color_green_2);
}

.form-input:focus {
  box-shadow: none;
  border-color: var(--color_green_2);
}
</style>