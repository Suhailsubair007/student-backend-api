import { Request, Response } from 'express';
import { AdminService } from '../services/adminService';

export class AdminController {
  constructor(private adminService: AdminService) {}

  async getAllStudents(req: Request, res: Response) {
    try {
      const students = await this.adminService.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async addUser(req: Request, res: Response) {
    try {
      const user = await this.adminService.addUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async editUser(req: Request, res: Response) {
    try {
      const user = await this.adminService.editUser(req.params.id, req.body);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async toggleUserStatus(req: Request, res: Response) {
    try {
      const user = await this.adminService.toggleUserStatus(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}