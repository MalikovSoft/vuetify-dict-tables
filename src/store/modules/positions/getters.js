export default {
  positions: (state) => {
    return state.positions;
  },
  positionById: (state) => (id) => {
    return state.positions.find((pos) => pos.id === id);
  },
};
