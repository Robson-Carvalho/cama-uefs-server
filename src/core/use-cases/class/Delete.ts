import { IClassRepository } from "../../domain/repositories/IClassRepository";

class Delete {
  private classRepository: IClassRepository;

  constructor(classRepository: IClassRepository) {
    this.classRepository = classRepository;
  }

  async execute(id: string): Promise<void> {
    await this.classRepository.delete(id);
  }
}

export { Delete };
