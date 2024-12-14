import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import RegisterRouter from "./routes/auth.routes.js";
const port = 3000;
const app = express();

// MiddleWares
dotenv.config();
app.use(express.json());

app.use('/auth', RegisterRouter);

// connecting the server with the database
const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the Database.");
    } catch (error) {
        console.error(error);
    }
}


// make the server start and listen on the port.
app.listen(port, ()=>{
    connection();
    console.log(`Connected to the server, listening on http://localhost:${port}`);
});