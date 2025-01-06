import { User, IUserDocument } from '../models/user.model';

export class UserRepository {
  async findByEmail(email: string): Promise<IUserDocument | null> {
    return User.findOne({ email });
  }

  async create(user: Partial<IUserDocument>): Promise<IUserDocument> {
    return User.create(user);
  }

  async findAll(): Promise<IUserDocument[]> {
    return User.find();
  }


  async getUserById(userId: string): Promise<IUserDocument | null> {
    return User.findById(userId);
  }
  
}
