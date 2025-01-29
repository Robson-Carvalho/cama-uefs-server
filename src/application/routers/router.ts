import { Request, Response, Router } from "express";
import { classRoutes } from "./classRoutes";
import { topicRoutes } from "./topicRoutes";
import { adminRoutes } from "./adminRoutes";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to CAMA/UEFS!" });
});

router.use("/admin", adminRoutes);
router.use("/class", classRoutes);
router.use("/topic", topicRoutes);

export { router };
