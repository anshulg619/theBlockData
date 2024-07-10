import express from 'express';
import cors from 'cors';
import {config } from 'dotenv';
import connectToMongoDb from "./config/db.js"
import routes from "./routes/blockData.js";




const app = express();

const PORT = process.env.PORT || 8080;



config({
    path:"./.env"
});

connectToMongoDb();

app.use(cors());

app.use(express.json());

app.use("/theBlockData", routes)

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})