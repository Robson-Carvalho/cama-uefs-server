import { Router, Request, Response, NextFunction } from "express";

import { AuthController } from "../controllers/AuthController";

const router = Router();

const authController = new AuthController();

router.post("/signIn", (req: Request, res: Response, next: NextFunction) => {
  authController.signIn(req, res, next);
});

router.get(
  "/recover/password/:email",
  (req: Request, res: Response, next: NextFunction) => {
    authController.recoverPassword(req, res, next);
  }
);

export { router as authRoutes };
