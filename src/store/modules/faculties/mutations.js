import * as type from './mutationTypes';

export default {
  [type.UPDATE_FACULTIES](state, payload) {
    state.faculties = payload;
  },
  [type.UPDATE_FACULTY](state, payload) {
    state.faculties[payload.id] = payload.ctx;
  },
  [type.DELETE_FACULTY](state, payload) {
    state.faculties = state.faculties.filter((faculty) => faculty.id !== payload);
  },
};
