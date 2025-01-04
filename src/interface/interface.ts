export interface UserInterface {
    name: string;
    email: string;
    course?: string;
    password: string;
    role: "admin" | "user";
    isActive?: boolean;
    enrollmentDate?: Date;
  }
  