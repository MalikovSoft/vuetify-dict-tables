import * as types from './mutationTypes';

export default {
  [types.UPDATE_DEGREES](state, payload) {
    state.degrees = payload;
  },
  [types.UPDATE_DEGREE](state, payload) {
    state.degrees[payload.id] = payload.ctx;
  },
  [types.DELETE_DEGREE](state, payload) {
    state.degrees = state.degrees.filter((degree) => degree.id !== payload);
  },
};
