import * as type from './mutationTypes';

export default {
  [type.UPDATE_POSITIONS](state, payload) {
    state.positions = payload;
  },
  [type.UPDATE_POSITION](state, payload) {
    state.positions[payload.id] = payload.ctx;
  },
  [type.DELETE_POSITION](state, payload) {
    state.positions = state.positions.filter((pos) => pos.id !== payload);
  },
};
