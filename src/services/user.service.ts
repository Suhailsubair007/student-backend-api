import bcrypt from 'bcrypt';
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

  async login(email: string, password: string): Promise<{ message: string; user: Partial<UserInterface> }> {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    
    return {
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role, 
      },
    };
  }
  

  async getAllStudents(): Promise<UserInterface[]> {
    return this.userRepository.findAll();
  }

}
