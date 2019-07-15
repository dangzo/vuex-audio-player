import Vue from "vue";
import Vuex from "vuex";
// modules
import tracklist from "./modules/tracklist";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tracklist
  },
  state: {},
  strict: process.env.NODE_ENV !== "production"
});
