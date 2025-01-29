import { Router, Request, Response, NextFunction } from "express";
import { AdminController } from "../controllers/AdminController";

const router = Router();

const adminController = new AdminController();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  adminController.get(req, res, next);
});

export { router as adminRoutes };
