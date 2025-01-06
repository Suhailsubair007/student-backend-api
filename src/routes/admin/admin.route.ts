import { Router } from 'express';
import { AdminController } from '../../controllers/admin/admin.controller';
import { UserRepository } from '../../repositories/user.repo';
import { UserService } from '../../services/user.service';
// import { authenticate } from '../../middlewares/auth.middleware';

export class AdminRoutes {
  public router: Router;
  private adminController: AdminController;

  constructor() {
    this.router = Router();
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    this.adminController = new AdminController(userService);
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      '/students',
      this.adminController.getAllStudents.bind(this.adminController)
    );
  }
}

export default new AdminRoutes().router;
