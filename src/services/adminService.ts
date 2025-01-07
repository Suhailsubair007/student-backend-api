import { UserRepository } from '../repositories/user.Repository';
import { UserInterface } from '../interface/interface';
import bcrypt from 'bcrypt';

export class AdminService {
  constructor(private userRepository: UserRepository) {}

  async getAllStudents(): Promise<UserInterface[]> {
    const users = await this.userRepository.findAll();
    return users.filter(user => user.role === 'student');
  }

  async addUser(userData: UserInterface): Promise<UserInterface> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await this.userRepository.create({
      ...userData,
      password: hashedPassword
    });
  }

  async editUser(id: string, userData: Partial<UserInterface>): Promise<UserInterface | null> {
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }
    return await this.userRepository.update(id, userData);
  }

  async toggleUserStatus(id: string): Promise<UserInterface | null> {
    return await this.userRepository.toggleActive(id);
  }
}