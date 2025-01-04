import express from "express";
import bodyParser from "body-parser";
// import cors from "cors";
// import studentRoutes from "./routes/student.routes";

const app = express();

// app.use(cors());
app.use(bodyParser.json());
// app.use("/api/students", studentRoutes);

export default app;
