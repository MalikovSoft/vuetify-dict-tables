export default {
  lecturers: (state) => {
    return state.lecturers;
  },
  lecturerById: (state) => (id) => {
    return state.lecturers.find((lecturer) => lecturer.id === id);
  },
};
