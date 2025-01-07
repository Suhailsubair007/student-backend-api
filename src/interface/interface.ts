export interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'student';
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}