<template>
  <div>
    <div class="container mt-5">
      <h2 class="mb-4">Users</h2>
      <div v-if="singleUser">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ singleUser.id }}</h5>
            <img :src="singleUser.avatar" alt="image" />
            <h2>{{ singleUser.first_name }} {{ singleUser.last_name }}</h2>
            <h4>
              {{ singleUser.email }}
            </h4>
          </div>
        </div>
      </div>
      <!-- <h2 v-else>Please Click the User Image then Show the About of User</h2> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      singleUser: null,
      route: useRoute(),
    };
  },
  async mounted() {
    const id = this.route.params.id;
    console.log("check", id);
    const resp = await axios.get(`https://reqres.in/api/users/${id}`);
    this.singleUser = resp.data.data;
    console.log("mounted", this.route, this.singleUser);
  },
};
</script>

<style></style>
