import * as type from './mutationTypes';
import ky from 'ky';
import Vue from 'vue';

export default {
  fetchStatuses: async ({ commit, getters }) => {
    const result = await ky.post(`${getters.APILink}?academicStatus=all`).json();
    commit(type.UPDATE_STATUSES, result);
  },
  deleteStatus: async ({ commit, getters }, payload) => {
    const status = getters.statusById(payload);
    const message = `
      <p>Удаление ученого звания: "${status.title}"</p>
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
    commit(type.DELETE_STATUS, payload);
  },
};
