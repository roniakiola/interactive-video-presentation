import express from "express";
import { connectToDatabase } from "./services/database.service";
import { gamesRouter } from "./routes/games.router";

const app = express();
const cors = require("cors");
const port = 8080; // default port to listen

connectToDatabase()
    .then(() => {
        app.use(cors());
        app.use("/games", gamesRouter);

        app.listen(port, () => {
            console.log("server started");
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });