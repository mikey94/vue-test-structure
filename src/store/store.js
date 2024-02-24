import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload.value;
    },
  },
  actions: {},
  modules: {},
  getters: {
    modifiedCounterValue(state) {
      return state.counter * 2;
    },
  },
});
