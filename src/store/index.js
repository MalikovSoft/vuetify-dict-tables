import Vue from 'vue';
import Vuex from 'vuex';

import Cfg from './modules/cfg';
import Degrees from './modules/degrees';
import Statuses from './modules/statuses';
import Positions from './modules/positions';
import Institutes from './modules/institutes';
import Faculties from './modules/faculties';
import Chairs from './modules/chairs';
import Lecturers from './modules/lecturers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Cfg, Degrees, Statuses, Positions, Institutes, Faculties, Chairs, Lecturers },
});
