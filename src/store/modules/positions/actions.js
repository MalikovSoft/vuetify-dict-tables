import * as type from './mutationTypes';
import ky from 'ky';
import Vue from 'vue';

export default {
  fetchPositions: async ({ commit, getters }) => {
    const result = await ky.post(`${getters.APILink}?position=all`).json();
    commit(type.UPDATE_POSITIONS, result);
  },
  deletePosition: async ({ commit, getters }, payload) => {
    const position = getters.positionById(payload);
    const message = `
      <p>Удаление должности: "${position.title}"</p>
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
    commit(type.DELETE_POSITION, payload);
  },
};
