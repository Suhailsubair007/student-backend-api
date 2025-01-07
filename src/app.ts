import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { UserRepository } from './repositories/user.Repository';
import { StudentService } from './services/studentService';
import { AdminService } from './services/adminService';
import { StudentController } from './controllers/student.controller';
import { AdminController } from './controllers/admin.controller';
import { createStudentRouter } from './routes/studentsRoute';
import { createAdminRouter } from './routes/adminRoute';

const app = express();
app.use(express.json());


const userRepository = new UserRepository();
const studentService = new StudentService(userRepository);
const adminService = new AdminService(userRepository);
const studentController = new StudentController(studentService);
const adminController = new AdminController(adminService);


app.use('/api/students', createStudentRouter(studentController));
app.use('/api/admin', createAdminRouter(adminController));

// Error handling middleware
app.use(errorHandler);


export default app;
