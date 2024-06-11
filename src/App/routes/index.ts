import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';

export const router = Router();

const allModuleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
];

allModuleRoutes.map((ele) => router.use(ele.path, ele.route));
