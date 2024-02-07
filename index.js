import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import todoRouter from "./Route/routesToDo.js"

const app = express();
const PORT = 8001;
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
});

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/TODO", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
};

connectToDatabase();

app.use(todoRouter);