import { SignIn } from "../../core/use-cases/auth/SignIn";

import { AdminRepository } from "../../infrastructure/repositories/AdminRepository";

class DependecyInjectionAuthRepository {
  private static _adminRepository = new AdminRepository();

  static getAdminRepository() {
    return this._adminRepository;
  }

  static getSignInUseCase() {
    return new SignIn(this._adminRepository);
  }
}

export { DependecyInjectionAuthRepository };
