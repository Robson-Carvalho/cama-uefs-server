import { IAdminRepository } from "../../core/domain/repositories/IAdminRepository";
import {
  IGetAdmins,
  IResponseCreateAdmin,
  IResponseAdminById,
} from "../../core/dtos/AdminDTOs";

class AdminRepository implements IAdminRepository {
  get(): Promise<IGetAdmins[] | []> {
    throw new Error("Method not implemented.");
  }
  create(
    name: string,
    email: string,
    password: string
  ): Promise<IResponseCreateAdmin | null> {
    throw new Error("Method not implemented.");
  }
  getById(id: string): Promise<IResponseAdminById | null> {
    throw new Error("Method not implemented.");
  }
  update(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { AdminRepository };
