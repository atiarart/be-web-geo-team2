import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataPendaftarRoutes from "./routes/DataPendaftarRoute.js";
import jadwalRoutes from "./routes/JadwalRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// routes
app.use("/api/pendaftar", dataPendaftarRoutes);  // untuk admin
app.use("/api/jadwal", jadwalRoutes);            // untuk user

// jalankan server
const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
});
