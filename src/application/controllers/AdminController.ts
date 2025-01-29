import { Request, Response, NextFunction } from "express";
import { DependecyInjectionAdminRepository } from "../containers/DependecyInjectionAdminRepository";
import { InternalServerError } from "../../core/errors/Errors";

class AdminController {
  private _get = DependecyInjectionAdminRepository.getGetUseCase();

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const admins = await this._get.execute();

      return res.status(200).json(admins);
    } catch (e: any) {
      if (!(e instanceof InternalServerError)) {
        return next(e);
      }

      console.error("Error: " + e.message);
      return next(new InternalServerError("Internal server error"));
    }
  }
}

export { AdminController };
