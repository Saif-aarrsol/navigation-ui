import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
  },
  getters: {},
  mutations: {
    setUser(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get("https://reqres.in/api/users/");
        commit("setUser", response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
});
