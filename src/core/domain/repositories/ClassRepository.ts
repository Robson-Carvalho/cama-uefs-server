import { IClass } from "../../dtos/ClassDTOs";

interface IClassRepository {
  create(title: string, path: string): Promise<IClass | null>;

  get(): Promise<IClass[] | []>;

  getById(_id: string): Promise<IClass | null>;

  update(title: string, path: string): Promise<void>;

  delete(_id: string): Promise<void>;
}

export { IClassRepository };
