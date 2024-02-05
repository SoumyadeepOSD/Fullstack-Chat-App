import express from 'express';
import dotenv from 'dotenv';

import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(express.json());

// *Root Route
app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});