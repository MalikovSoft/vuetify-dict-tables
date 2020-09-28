export default {
  degrees: (state) => {
    return state.degrees;
  },
  degreeById: (state) => (id) => {
    return state.degrees.find((degree) => degree.id === id);
  },
};
