import { Request, Response, NextFunction } from "express";
import { DependecyInjectionTopicRepository } from "../containers/DependecyInjectionTopicRepository";
import { InternalServerError } from "../../core/errors/Errors";

class TopicController {
  private _get = DependecyInjectionTopicRepository.getGetUseCase();
  private _create = DependecyInjectionTopicRepository.getCreateUseCase();
  private _getById = DependecyInjectionTopicRepository.getGetByIdUseCase();
  private _getByPath = DependecyInjectionTopicRepository.getGetByPathUseCase();
  private _update = DependecyInjectionTopicRepository.getUpdateUseCase();
  private _delete = DependecyInjectionTopicRepository.getDeleteUseCase();

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const topics = await this._get.execute();

      return res.status(200).json(topics);
    } catch (e: any) {
      return next(new InternalServerError(e.message));
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const topic = await this._getById.execute(id);

      return res.status(200).json(topic);
    } catch (e: any) {
      return next(new InternalServerError(e.message));
    }
  }

  async getByPath(req: Request, res: Response, next: NextFunction) {
    try {
      const { path } = req.params;

      const topic = await this._getByPath.execute(path);

      return res.status(200).json(topic);
    } catch (e: any) {
      return next(new InternalServerError(e.message));
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, content, path, classID } = req.body;

      const topic = await this._create.execute(title, content, path, classID);

      return res.status(201).json(topic);
    } catch (e: any) {
      return next(new InternalServerError(e.message));
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, content, path, classID } = req.body;

      const updatedTopic = await this._update.execute(
        id,
        title,
        content,
        path,
        classID
      );

      return res.status(200).json(updatedTopic);
    } catch (e: any) {
      return next(new InternalServerError(e.message));
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      await this._delete.execute(id);

      return res.status(204).send();
    } catch (e: any) {
      return next(new InternalServerError(e.message));
    }
  }
}

export { TopicController };
