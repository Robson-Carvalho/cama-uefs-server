import { IClassRepository } from "../../domain/repositories/IClassRepository";
import { IClass } from "../../dtos/ClassDTOs";

class Create {
  private classRepository: IClassRepository;

  constructor(classRepository: IClassRepository) {
    this.classRepository = classRepository;
  }

  async execute(title: string, path: string): Promise<IClass | null> {
    return await this.classRepository.create(title, path);
  }
}

export { Create };
