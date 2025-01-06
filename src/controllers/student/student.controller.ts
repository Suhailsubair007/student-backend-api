import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../services/user.service';

export class StudentController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  // Register a new user
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.register(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  // Login user without JWT
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const response = await this.userService.login(email, password);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }
  
}
