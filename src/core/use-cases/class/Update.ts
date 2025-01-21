import { IClassRepository } from "../../domain/repositories/IClassRepository";

class Update {
  private classRepository: IClassRepository;

  constructor(classRepository: IClassRepository) {
    this.classRepository = classRepository;
  }

  async execute(id: string, title: string, path: string): Promise<void> {
    await this.classRepository.update(id, title, path);
  }
}

export { Update };
