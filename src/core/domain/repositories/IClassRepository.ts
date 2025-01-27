import { IClass } from "../../dtos/ClassDTOs";
import { IContentMap } from "../../interfaces/IContentMap";

interface IClassRepository {
  create(title: string, path: string): Promise<IClass | null>;

  get(): Promise<IClass[] | []>;

  getContentMap(): Promise<IContentMap[] | []>;

  getById(_id: string): Promise<IClass | null>;

  getLastCreated(): Promise<IClass | null>;

  update(_id: string, title: string, path: string): Promise<void>;

  delete(_id: string): Promise<void>;
}

export { IClassRepository };
