import { createStore } from "vuex";
import storePlugins from "@/plugins/store-plugins";
import people from "./modules/people";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { people },
  plugins: [storePlugins],
});
