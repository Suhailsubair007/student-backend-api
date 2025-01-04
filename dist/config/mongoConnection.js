"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect_database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connect_database = async () => {
    try {
        const url = process.env.MONGOURI || "mongodb://localhost:27017/student_management";
        await mongoose_1.default.connect(url);
        console.log("MongoDB Connected sucessfully...");
    }
    catch (error) {
        console.error('Error while connecting to mongoDB..', error);
        process.exit(1);
    }
};
exports.connect_database = connect_database;
