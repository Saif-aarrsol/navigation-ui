<template>
  <div class="home">
    <div class="container mt-5">
      <h1 class="display-4">Welcome to My Awesome Vue.js App</h1>
      <p class="lead">
        This is a simple homepage for your Vue.js application. Customize it to
        suit your needs!
      </p>
      <router-link to="/users" class="btn btn-primary"
        >Explore Users</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
