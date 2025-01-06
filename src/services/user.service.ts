import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repo';
import { UserInterface } from '../interface/interface';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async register(user: UserInterface): Promise<UserInterface> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: hashedPassword };
    return this.userRepository.create(newUser);
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  }

  async getAllStudents(): Promise<UserInterface[]> {
    return this.userRepository.findAll();
  }

  async updateUser(id: string, updates: Partial<UserInterface>): Promise<UserInterface | null> {
    return this.userRepository.update(id, updates);
  }
}
