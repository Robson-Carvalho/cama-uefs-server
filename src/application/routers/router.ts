import { Request, Response, Router } from "express";
import { classRoutes } from "./classRoutes";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to CAMA/UEFS!" });
});

router.use("/class", classRoutes);

export { router };
