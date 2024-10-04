import express from 'express';
import mosqueRouter from './routes/mosque.route.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './config/db.config.js';

dotenv.config();
dbConnection();

const appBodyParser = bodyParser.json();;
const port = process.env.PORT


const app = express();
app.use(express.json());
app.use(cors());

app.use('/mosques', mosqueRouter);

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})