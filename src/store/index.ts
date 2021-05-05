import { createStore } from "vuex";

export default createStore({

  state: {
    coords: {
      x: 0, y: 0
    }
  },

  mutations: {

    SET_LAST_CLICK_COORDS(state, coords) { state.coords = coords }

  },

  actions: {},

  modules: {},

})
