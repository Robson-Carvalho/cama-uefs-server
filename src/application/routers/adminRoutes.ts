import { Router, Request, Response, NextFunction } from "express";
import { AdminController } from "../controllers/AdminController";

const router = Router();

const adminController = new AdminController();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  adminController.get(req, res, next);
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  adminController.getById(req, res, next);
});

router.get("/:email", (req: Request, res: Response, next: NextFunction) => {
  adminController.getByEmail(req, res, next);
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  adminController.create(req, res, next);
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  adminController.delete(req, res, next);
});

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  adminController.update(req, res, next);
});

export { router as adminRoutes };
