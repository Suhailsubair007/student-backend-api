import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connect_database } from './config/mongoConnection';

dotenv.config();

const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.get('/apple', (req: Request, res: Response) => {
  res.send({
    message: 'Welcome to the Student Management API!',
    status: 'success',
  });
});

connect_database()
  .then(() => {
    console.log('Database connection established..');
  })
  .catch((e) => {
    console.error('Error in connection', e);
    process.exit(1);
  });

export default app;
