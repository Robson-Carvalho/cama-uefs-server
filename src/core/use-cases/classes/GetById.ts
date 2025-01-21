import { IClassRepository } from "../../domain/repositories/IClassRepository";
import { IClass } from "../../dtos/ClassDTOs";

class GetById {
  private classRepository: IClassRepository;

  constructor(classRepository: IClassRepository) {
    this.classRepository = classRepository;
  }

  async execute(id: string): Promise<IClass | null> {
    return await this.classRepository.getById(id);
  }
}

export { GetById };
