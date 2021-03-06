import * as type from './mutationTypes';
import ky from 'ky';
import Vue from 'vue';

export default {
  fetchFaculties: async ({ commit, getters }) => {
    const result = await ky.get(`${getters.APILink}?faculty=all`).json();
    commit(type.UPDATE_FACULTIES, result);
  },
  deleteFaculty: async ({ commit, getters }, payload) => {
    const faculty = getters.facultyById(payload);
    const message = `
      <p>Удаление факультета: "${faculty.title}"</p>
      <p class="text-right font-weight-bold mb-0">Прошло успешно!</p>
    `;
    Vue.notify({
      group: 'info',
      title: 'Сообщение',
      text: message,
      type: 'success',
      position: 'top center',
      speed: 1000,
      duration: 250,
    });
    commit(type.DELETE_FACULTY, payload);
  },
};
