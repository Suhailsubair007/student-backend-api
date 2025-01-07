import { Request, Response } from 'express';
import { StudentService } from '../services/studentService';

export class StudentController {
  constructor(private studentService: StudentService) {}

  async register(req: Request, res: Response) {
    try {
      const user = await this.studentService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const token = await this.studentService.login(req.body);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const profile = await this.studentService.getProfile(req.user.userId);
      res.json(profile);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
}
