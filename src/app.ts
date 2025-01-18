import express, { Application } from "express";
import cors from "cors";
import { router } from "./routers/router";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

export { app };
