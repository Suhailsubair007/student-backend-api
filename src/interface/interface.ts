export interface UserInterface {
  id: string;
  name: string;
  email: string;
  course?: string;
  password: string;
  role: "admin" | "user";
  isActive?: boolean;
  enrollmentDate?: Date;
}
