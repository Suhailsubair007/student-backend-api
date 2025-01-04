"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import cor from 'cors'
const mongoConnection_1 = require("./config/mongoConnection");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cors())
(0, mongoConnection_1.connect_database)().then(() => {
    console.log("Database connection established..");
}).catch((e) => {
    console.error('Error in connection', e);
    process.exit(1);
});
exports.default = app;
