import mongoose, { Schema } from 'mongoose';
import { UserInterface } from '../interface/interface';

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
}, {
  timestamps: true
});

export const UserModel = mongoose.model<UserInterface>('User', userSchema);