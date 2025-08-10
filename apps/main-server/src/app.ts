import express from "express";
import cors from "cors";

import pointsRouter from "./routes/pointsRouter";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/points", pointsRouter);

export default app;
