const express = require("express");
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const { client } = require("./config/database"); // Importojmë vetëm klientin

// Importimi i routes
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");

const app = express();
app.use(express.json());
app.use(cors());

async function startServer() {
    try {
        await client.connect();
        console.log("Lidhja me MongoDB u realizua me sukses!".green);

        global.db = client.db("carRental"); // Ruajmë lidhjen globale

        console.log("Serveri është gati për të pranuar kërkesa!".yellow);

        // Rrugët
        app.use("/api/auth", authRoutes);
        app.use("/api", carRoutes);

        // Startimi i serverit
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Serveri u startua në portin ${PORT}`.blue));
    } catch (err) {
        console.error("Gabim gjatë startimit të serverit:", err.message);
        process.exit(1);
    }
}

startServer();
