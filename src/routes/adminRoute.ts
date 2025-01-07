import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';
// import { authMiddleware } from '../middlewares/auth.middleware';

export const createAdminRouter = (adminController: AdminController) => {
  const router = Router();
  // const adminAuth = authMiddleware(['admin']);

  router.get('/students', adminController.getAllStudents.bind(adminController));
  router.post('/users', adminController.addUser.bind(adminController));
  // router.put('/users/:id', adminController.editUser.bind(adminController));
  // router.patch('/users/:id/toggle-status', adminController.toggleUserStatus.bind(adminController));

  return router;
};