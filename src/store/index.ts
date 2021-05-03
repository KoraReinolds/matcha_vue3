import { createStore } from "vuex";

export default createStore({

  state: {
    coords: null
  },

  mutations: {

    SET_LAST_CLICK_COORDS(state, coords) { state.coords = coords }

  },

  actions: {},

  modules: {},

})
