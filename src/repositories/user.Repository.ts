import { UserModel } from '../models/user';
import { UserInterface } from '../interface/interface';

export class UserRepository {
  async create(userData: UserInterface): Promise<UserInterface> {
    return await UserModel.create(userData);
  }

  async findByEmail(email: string): Promise<UserInterface | null> {
    return await UserModel.findOne({ email });
  }

  async findById(id: string): Promise<UserInterface | null> {
    return await UserModel.findById(id);
  }

  async findAll(): Promise<UserInterface[]> {
    return await UserModel.find();
  }

  async update(id: string, userData: Partial<UserInterface>): Promise<UserInterface | null> {
    return await UserModel.findByIdAndUpdate(id, userData, { new: true });
  }

  async toggleActive(id: string): Promise<UserInterface | null> {
    const user = await UserModel.findById(id);
    if (!user) return null;
    user.isActive = !user.isActive;
    return await user.save();
  }
}