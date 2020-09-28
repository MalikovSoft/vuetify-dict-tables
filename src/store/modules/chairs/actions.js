import * as type from './mutationTypes';
import ky from 'ky';
import Vue from 'vue';

export default {
  fetchChairs: async ({ commit, getters }) => {
    const result = await ky.get(`${getters.APILink}?chair=all`).json();
    commit(type.UPDATE_CHAIRS, result);
  },
  deleteChair: async ({ commit, getters }, payload) => {
    const chair = getters.chairById(payload);
    const message = `
      <p>Удаление кафедры: "${chair.title}"</p>
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
    commit(type.DELETE_CHAIR, payload);
  },
};
