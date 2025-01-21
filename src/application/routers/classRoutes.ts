import { Router, Request, Response, NextFunction } from "express";
import { ClassController } from "../controllers/ClassController";

const router = Router();

const classController = new ClassController();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  classController.get(req, res, next);
});

export { router as classRoutes };
