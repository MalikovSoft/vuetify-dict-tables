import * as type from './mutationTypes';
import ky from 'ky';
import Vue from 'vue';

export default {
  fetchLecturers: async ({ commit, getters }) => {
    const result = await ky.get(`${getters.APILink}?lecturer=all`).json();
    commit(type.UPDATE_LECTURERS, result);
  },
  deleteLecturer: async ({ commit, getters }, payload) => {
    const lecturer = getters.lecturerById(payload);
    const message = `
      <p>Удаление преподавателя: "${lecturer.title}"</p>
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
    commit(type.DELETE_LECTURER, payload);
  },
};
