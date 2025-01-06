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

  async update(id: string, updates: Partial<IUserDocument>): Promise<IUserDocument | null> {
    return User.findByIdAndUpdate(id, updates, { new: true });
  }
}
