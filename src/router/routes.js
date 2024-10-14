const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/consulta-pet/ConsultaPetPage.vue') },
    ],
  },
  {
    path: '/pet/historico-clinico/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/historico-clinico/HistoricoPetPage.vue') },
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
    path: '/pets',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/pet/PetPage.vue') },
    ],
  },
  {
    path: '/pets/novo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/pet/PetForm.vue') },
    ],
  },
  {
    path: '/pet/editar/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/pet/PetForm.vue') },
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
