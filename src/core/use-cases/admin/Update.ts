import { AdminRepository } from "../../../infrastructure/repositories/AdminRepository";

class Update {
  constructor(private _adminRepository: AdminRepository) {}

  async execute(
    _id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    await this._adminRepository.update(_id, name, email, password);
  }
}

export { Update };
