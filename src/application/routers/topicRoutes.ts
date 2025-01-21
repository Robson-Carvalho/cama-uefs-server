import { Router, Request, Response, NextFunction } from "express";
import { TopicController } from "../controllers/TopicController";

const router = Router();
const topicController = new TopicController();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  topicController.get(req, res, next);
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  topicController.getById(req, res, next);
});

router.get("/path/:path", (req: Request, res: Response, next: NextFunction) => {
  topicController.getByPath(req, res, next);
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  topicController.create(req, res, next);
});

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  topicController.update(req, res, next);
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  topicController.delete(req, res, next);
});

export { router as topicRoutes };
