const GuestLayout = () => import(/* webpackChunkName: "js/GuestLayout" */ '@layouts/GuestLayout.vue');
const Home = () => import(/* webpackChunkName: "js/HomePage" */ '@home/HomePage.vue');
const NotFound = () => import(/* webpackChunkName: "js/NotFoundPage" */ '@errors/NotFound.vue');

export default [
  {
    path: '/',
    component: GuestLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
      },
    ],
  },
];
