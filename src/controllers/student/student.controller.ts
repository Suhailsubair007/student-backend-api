import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../services/user.service';

export class StudentController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.register(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.userService.login(req.body.email, req.body.password);
      res.status(200).json({ success: true, token });
    } catch (error) {
      next(error);
    }
  }
}
