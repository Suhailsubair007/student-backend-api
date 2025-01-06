import express from 'express';
import dotenv from 'dotenv';
import {connect_database} from './config/mongoConnection'
import AdminRoutes  from './routes/admin/admin.route'
import StudentRoutes  from './routes/student/student.route'


dotenv.config();
const app = express();

connect_database();
app.use(express.json());
app.use('/api/admin', AdminRoutes);
app.use('/api/student', StudentRoutes);

export default app;
