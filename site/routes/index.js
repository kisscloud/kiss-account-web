import DashboardView from '../layouts/dashboard.vue';
import NotFoundView from './errors/not-found.vue';

import HomeView from './home.vue';
const AuthLogin = () => import('./pages/login.vue');
const TwoFactor = () => import('./pages/two-factor.vue');
const RegisterView = () => import('./pages/register.vue');
const RootView = () => import('./pages/root.vue');
const ForgotView = () => import('./pages/forgot.vue');
const ResetView = () => import('./pages/reset.vue');
const ErrorView = () => import('./pages/error.vue');

const PermissionUsers = () => import('./permission/users.vue');
const PermissionPermissions = () => import('./permission/permissions.vue');
const PermissionRoles = () => import('./permission/roles.vue');
const PermissionLogs = () => import('./permission/logs.vue');
const ClientsView = () => import('./clients.vue');

export default [{
    path: '/auth/login',
    component: AuthLogin
  },
  {
    path: '/auth/two-factor',
    component: TwoFactor
  },
  {
    path: '/auth/register',
    component: RegisterView
  },
  {
    path: '/install/root',
    component: RootView
  },
  {
    path: '/auth/forgot',
    component: ForgotView
  },
  {
    path: '/auth/reset',
    component: ResetView
  },
  {
    path: '/error',
    component: ErrorView
  },
  {
    path: '/',
    component: DashboardView,
    children: [
      // 添加路由
      {
        path: '/permission/logs',
        component: PermissionLogs
      },
      {
        path: '/permission/roles',
        component: PermissionRoles
      },
      {
        path: '/permission/accounts',
        component: PermissionUsers
      },
      {
        path: '/permission/permissions',
        component: PermissionPermissions
      },
      {
        path: '/clients',
        component: ClientsView
      },
      {
        path: '',
        component: HomeView
      }
    ]
  },
  {
    path: '*',
    component: NotFoundView
  }
];
