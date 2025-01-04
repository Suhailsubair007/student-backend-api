import mongoose from "mongoose";

export const connect_database = async (): Promise<void> => {
    try {
        const url = process.env.MONGOURI || "mongodb://localhost:27017/student_management";
        await mongoose.connect(url);
        console.log("MongoDB Connected sucessfully...");
    } catch (error) {
        console.error('Error while connecting to mongoDB..', error);
        process.exit(1);
    }
}