import { Request, Response, NextFunction } from "express";

import { DependecyInjectionClassRepository } from "../containers/DependecyInjectionClassRepository";
import { InternalServerError } from "../../core/errors/Errors";

class ClassController {
  private _get = DependecyInjectionClassRepository.getGetUseCase();

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const _class = await this._get.execute();

      return res.status(200).json(_class);
    } catch (e: any) {
      if (!(e instanceof InternalServerError)) {
        return next(e);
      }

      console.log("Error: " + e.message);
      return next(new InternalServerError("Internal server error"));
    }
  }
}

export { ClassController };
