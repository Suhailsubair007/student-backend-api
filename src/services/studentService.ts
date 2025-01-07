import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.Repository';
import { UserInterface, LoginCredentials } from '../interface/interface';

export class StudentService {
  constructor(private userRepository: UserRepository) {}

  async register(userData: UserInterface): Promise<UserInterface> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await this.userRepository.create({
      ...userData,
      password: hashedPassword,
      role: 'student'
    });
  }

  async login(credentials: LoginCredentials): Promise<string> {
    const user = await this.userRepository.findByEmail(credentials.email);
    if (!user || !user.isActive) {
      throw new Error('Invalid credentials or account is blocked');
    }

    const isValidPassword = await bcrypt.compare(credentials.password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    return jwt.sign(
      { userId: user._id, role: user.role },
      'your-secret-key',
      { expiresIn: '1h' }
    );
  }

  async getProfile(userId: string): Promise<UserInterface | null> {
    return await this.userRepository.findById(userId);
  }
}