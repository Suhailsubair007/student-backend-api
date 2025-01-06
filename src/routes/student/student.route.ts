import { Router } from 'express';
import { StudentController } from '../../controllers/student/student.controller';
import { UserRepository } from '../../repositories/user.repo';
import { UserService } from '../../services/user.service';

export class StudentRoutes {
  public router: Router;
  private studentController: StudentController;
 
  constructor() {
    this.router = Router();
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    this.studentController = new StudentController(userService);
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      '/register',
      this.studentController.register.bind(this.studentController)
    );
    this.router.post(
      '/login',
      this.studentController.login.bind(this.studentController)
    );
  }
}

export default new StudentRoutes().router;
