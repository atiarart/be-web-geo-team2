import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import DataPendaftar from "./routes/DataPendaftarRoute.js";
dotenv.config();

const app = express();

// app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(DataPendaftar)

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and is running ...');
});

