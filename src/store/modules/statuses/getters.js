export default {
  statuses: (state) => {
    return state.statuses;
  },
  statusById: (state) => (id) => {
    return state.statuses.find((status) => status.id === id);
  },
};
