import { Router } from 'express';
import { StudentController } from '../controllers/student.controller';
// import { authMiddleware } from '../middlewares/auth.middleware'

export const createStudentRouter = (studentController: StudentController) => {
  const router = Router();

  router.post('/register', studentController.register.bind(studentController));
  router.post('/login', studentController.login.bind(studentController));
  router.get(
    '/profile',
    // authMiddleware(['student']),
    // studentController.getProfile.bind(studentController)
  );

  return router;
};