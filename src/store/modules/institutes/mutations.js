import * as type from './mutationTypes';

export default {
  [type.UPDATE_INSTITUTES](state, payload) {
    state.institutes = payload;
  },
  [type.UPDATE_INSTITUTE](state, payload) {
    state.institutes[payload.id] = payload.ctx;
  },
  [type.DELETE_INSTITUTE](state, payload) {
    state.institutes = state.institutes.filter((inst) => inst.id !== payload);
  },
};
