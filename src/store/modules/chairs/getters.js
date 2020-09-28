export default {
  chairs: (state) => {
    return state.chairs;
  },
  chairById: (state) => (id) => {
    return state.chairs.find((chair) => chair.id === id);
  },
};
