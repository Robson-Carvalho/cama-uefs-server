import { Create } from "../../core/use-cases/classes/Create";
import { Delete } from "../../core/use-cases/classes/Delete";
import { Get } from "../../core/use-cases/classes/Get";
import { GetById } from "../../core/use-cases/classes/GetById";
import { Update } from "../../core/use-cases/classes/Update";
import { ClassRepository } from "../../infrastructure/repositories/ClassRepository";

class DependecyInjectionClassRepository {
  private static _classRepository = new ClassRepository();

  static getClassRepository() {
    return this._classRepository;
  }

  static getGetUseCase() {
    return new Get(this._classRepository);
  }

  static getCreateUseCase() {
    return new Create(this._classRepository);
  }

  static getGetByIdUseCase() {
    return new GetById(this._classRepository);
  }

  static getUpdateUseCase() {
    return new Update(this._classRepository);
  }

  static getDeleteUseCase() {
    return new Delete(this._classRepository);
  }
}

export { DependecyInjectionClassRepository };
