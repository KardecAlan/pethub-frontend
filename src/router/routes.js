const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },
  {
    path: '/tutor',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/tutor/TutorPage.vue') },
    ],
  },
  {
    path: '/tutor/novo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tutor/TutorForm.vue') },
    ],
  },
  {
    path: '/tutor/editar/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tutor/TutorForm.vue') },
    ],
  },
  {
    path: '/tutelado',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tutelado/TuteladoList.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
