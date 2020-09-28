import * as type from './mutationTypes';
import ky from 'ky';
import Vue from 'vue';

export default {
  fetchInstitutes: async ({ commit, getters }) => {
    const result = await ky.post(`${getters.APILink}?institute=all`).json();
    commit(type.UPDATE_INSTITUTES, result);
  },
  deleteInstitute: async ({ commit, getters }, payload) => {
    const institute = getters.instituteById(payload);
    const message = `
      <p>Удаление института: "${institute.title}"</p>
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
    commit(type.DELETE_INSTITUTE, payload);
  },
};
