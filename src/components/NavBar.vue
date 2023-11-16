<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-body-tertiary">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <i class="fa-solid fa-house"></i>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users/">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about1">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
