export default {
  state: {
    APILink: 'http://10.200.131.20/dictionaries-system/api',
  },
  mutations: {
    UPDATE_APILINK(state, payload) {
      state.APILink = payload;
    },
  },
  actions: {
    setAPILink: ({ commit }, payload) => {
      commit(`UPDATE_APILINK`, payload);
    },
  },
  getters: {
    APILink: (state) => {
      return state.APILink;
    },
  },
};
