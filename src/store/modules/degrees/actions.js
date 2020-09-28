import * as type from './mutationTypes';
import ky from 'ky';
import Vue from 'vue';

export default {
  fetchDegrees: async ({ commit, getters }) => {
    const result = await ky.post(`${getters.APILink}?academicDegree=all`).json();
    commit(type.UPDATE_DEGREES, result);
  },
  deleteDegree: async ({ commit, getters }, payload) => {
    const degree = getters.degreeById(payload);
    const message = `
      <p>Удаление ученой степени: "${degree.title}"</p>
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
    commit(type.DELETE_DEGREE, payload);
  },
};
