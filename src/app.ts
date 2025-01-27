import express, { Application } from "express";
import cors from "cors";

import { errorHandler } from "./application/middlewares/errorHandler";
import { MongoDB } from "./infrastructure/databases/MongoDB";
import { router } from "./application/routers/router";

const app: Application = express();

MongoDB.getInstance().connect();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use(errorHandler);

export { app };
