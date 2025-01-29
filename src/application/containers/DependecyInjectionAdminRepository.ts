import { Get } from "../../core/use-cases/admin/Get";
import { AdminRepository } from "../../infrastructure/repositories/AdminRepository";

class DependecyInjectionAdminRepository {
  private static _adminRepository = new AdminRepository();

  static getAdminRepository() {
    return this._adminRepository;
  }

  static getGetUseCase() {
    return new Get(this._adminRepository);
  }
}

export { DependecyInjectionAdminRepository };
