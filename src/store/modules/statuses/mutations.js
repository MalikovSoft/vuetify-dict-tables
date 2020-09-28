import * as type from './mutationTypes';

export default {
  [type.UPDATE_STATUSES](state, payload) {
    state.statuses = payload;
  },
  [type.UPDATE_STATUS](state, payload) {
    state.statuses[payload.id] = payload.ctx;
  },
  [type.DELETE_STATUS](state, payload) {
    state.statuses = state.statuses.filter((status) => status.id !== payload);
  },
};
