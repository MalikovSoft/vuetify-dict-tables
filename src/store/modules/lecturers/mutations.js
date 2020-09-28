import * as type from './mutationTypes';

export default {
  [type.UPDATE_LECTURERS](state, payload) {
    state.lecturers = payload;
  },
  [type.UPDATE_LECTURER](state, payload) {
    state.lecturers[payload.id] = payload.ctx;
  },
  [type.DELETE_LECTURER](state, payload) {
    state.lecturers = state.lecturers.filter((lecturer) => lecturer.id !== payload);
  },
};
