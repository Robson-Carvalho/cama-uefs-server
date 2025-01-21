import { IClassRepository } from "../../domain/repositories/IClassRepository";
import { IContentMap } from "../../interfaces/IContentMap";

class GetContentMap {
  private classRepository: IClassRepository;

  constructor(classRepository: IClassRepository) {
    this.classRepository = classRepository;
  }

  async execute(): Promise<IContentMap[] | []> {
    return await this.classRepository.getContentMap();
  }
}

export { GetContentMap };
