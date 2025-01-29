import { NextFunction, Request, Response } from "express";
import { ValidationError, InternalServerError } from "../../core/errors/Errors";

class AuthController {
  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email) next(new ValidationError("E-mail required."));

      if (!password) next(new ValidationError("Password required."));

      res.status(200).json();
    } catch (e: any) {
      if (!(e instanceof InternalServerError)) {
        return next(e);
      }

      next(new InternalServerError(e.message));
    }
  }
}

export { AuthController };
