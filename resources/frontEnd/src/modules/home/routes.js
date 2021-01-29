export default [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'Dashboard',
    children: [
      {
          name: 'Home', path: '/home', component: () => import('./pages/Dashboard.vue')
      }
    ]
  }
]
