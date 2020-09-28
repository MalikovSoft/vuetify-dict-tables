export default {
  faculties: (state) => {
    return state.faculties;
  },
  facultyById: (state) => (id) => {
    return state.faculties.find((faculty) => faculty.id === id);
  },
};
