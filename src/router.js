import { lazy } from 'react';

const routers = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/register',
    exact: true,
    component: lazy(() => import('./pages/register')),
  },
];

export default routers;
