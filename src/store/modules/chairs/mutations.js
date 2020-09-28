import * as type from './mutationTypes';

export default {
  [type.UPDATE_CHAIRS](state, payload) {
    state.chairs = payload;
  },
  [type.UPDATE_CHAIR](state, payload) {
    state.chairs[payload.id] = payload.ctx;
  },
  [type.DELETE_CHAIR](state, payload) {
    state.chairs = state.chairs.filter((chair) => chair.id !== payload);
  },
};
