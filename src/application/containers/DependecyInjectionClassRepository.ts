import { ClassRepository } from "../../infrastructure/repositories/ClassRepository";
import { Get } from "../../core/use-cases/Class";

class DependecyInjectionClassRepository {
  private static _classRepository = new ClassRepository();

  static getClassRepository() {
    return this._classRepository;
  }

  static getGetUseCase() {
    return new Get(this._classRepository);
  }
}

export { DependecyInjectionClassRepository };
