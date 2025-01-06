import express from 'express';
import dotenv from 'dotenv';
import AdminRoutes  from './routes/admin/admin.route'
import StudentRoutes  from './routes/student/student.route'


dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/admin', AdminRoutes);
app.use('/api/student', StudentRoutes);

export default app;
