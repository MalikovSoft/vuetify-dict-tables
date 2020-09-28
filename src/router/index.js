import Vue from 'vue';
import VueRouter from 'vue-router';
import AcademicDegrees from '../views/AcademicDegrees.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AcademicDegrees',
    component: AcademicDegrees,
  },
  {
    path: '/AcademicStatuses',
    name: 'AcademicStatuses',
    component: () => import('../views/AcademicStatuses.vue'),
  },
  {
    path: '/Positions',
    name: 'Positions',
    component: () => import('../views/Positions.vue'),
  },
  {
    path: '/Institutes',
    name: 'Institutes',
    component: () => import('../views/Institutes.vue'),
  },
  {
    path: '/Faculties',
    name: 'Faculties',
    component: () => import('../views/Faculties.vue'),
  },
  {
    path: '/Chairs',
    name: 'Chairs',
    component: () => import('../views/Chairs.vue'),
  },
  {
    path: '/Lecturers',
    name: 'Lecturers',
    component: () => import('../views/Lecturers.vue'),
  },
];

const router = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes,
});
console.log(router.currentRoute.path);
export default router;
