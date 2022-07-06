import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

const requireContext = require.context("./modules/", true, /.*\.ts$/);

const storeModule = requireContext
  .keys()
  .map((file) => [file.replace(/(^.\/)|(\.ts$)/g, ""), requireContext(file)])
  .reduce((modules, [name, moduleItem]) => {
    if (name.includes("type")) {
      return { ...modules };
    }
    let moduleName = name;
    if (name.includes("/index")) {
      moduleName = name.replace("/index", "");
    }
    if (moduleItem.namespaced === undefined) {
      moduleItem.namespaced = true;
    }

    return { ...modules, [moduleName]: moduleItem.default };
  }, {});

// Create a new store instance.
const store = {
  modules: storeModule,
  state,
  mutations,
  actions,
  getters,
};

export default createStore(store);