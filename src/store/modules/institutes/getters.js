export default {
  institutes: (state) => {
    return state.institutes;
  },
  instituteById: (state) => (id) => {
    return state.institutes.find((inst) => inst.id === id);
  },
};
