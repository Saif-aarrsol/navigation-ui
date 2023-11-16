<template>
  <div>
    <div class="container mt-5">
      <h2 class="mb-4">Users</h2>
      <div v-if="users.length === 0" class="alert alert-info">
        No Users available.
      </div>
      <div v-else>
        <div v-for="user in users" :key="user.id" class="card mb-3">
          <div class="card-body">
            <!-- <h5 class="card-title">{{ user.id }}</h5> -->
            <img :src="user.avatar" alt="image" @click="singleUser(user.id)" />
            <h2>{{ user.first_name }} {{ user.last_name }}</h2>
            <!-- <h4>
              {{ user.email }}
            </h4> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

// import axios from "axios";
export default {
  name: "UsersView",
  data() {
    return {
      router: useRouter(),
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    singleUser(id) {
      console.log("check", id);
      this.router.push({ name: "about", params: { id: id } });
      // await axios.get(`https://reqres.in/api/users/${id}`);
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
