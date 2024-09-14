import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('MongoDB connection error:', err));
        // console.log("Database connected");
    } catch (error) {
        console.error("Error connecting database");
    }   
}