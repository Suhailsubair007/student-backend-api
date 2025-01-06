import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../services/user.service';

export class AdminController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getAllStudents(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await this.userService.getAllStudents();
      res.status(200).json({ success: true, data: students });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const updates = req.body;
      const user = await this.userService.updateUser(userId, updates);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }
}
