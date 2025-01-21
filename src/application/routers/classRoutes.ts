import { Router, Request, Response, NextFunction } from "express";
import { ClassController } from "../controllers/ClassController";

const router = Router();

const classController = new ClassController();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  classController.create(req, res, next);
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  classController.get(req, res, next);
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  classController.getById(req, res, next);
});

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  classController.update(req, res, next);
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  classController.delete(req, res, next);
});

export { router as classRoutes };
