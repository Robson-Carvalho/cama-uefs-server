import { IClassRepository } from "../../core/domain/repositories/ClassRepository";
import { IClass } from "../../core/dtos/ClassDTOs";

class ClassRepository implements IClassRepository {
  create(title: string, path: string): Promise<IClass | null> {
    throw new Error("Method not implemented.");
  }
  get(): Promise<IClass[] | []> {
    throw new Error("Method not implemented.");
  }
  getById(_id: string): Promise<IClass | null> {
    throw new Error("Method not implemented.");
  }
  update(title: string, path: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { ClassRepository };
