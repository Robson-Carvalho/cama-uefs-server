import express, { Application } from "express";
import cors from "cors";

import { errorHandler } from "./application/middlewares/errorHandler";
import { MongoDB } from "./infrastructure/databases/MongoDB";
import { router } from "./application/routers/router";

const app: Application = express();

MongoDB.getInstance().connect();

const corsOptions = {
  origin: [process.env.FRONTEND_URL as string],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/v1", router);
app.use(errorHandler);

export { app };
