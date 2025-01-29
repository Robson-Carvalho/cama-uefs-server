import { AdminModel } from "../../core/domain/entities/Admin";
import { IAdminRepository } from "../../core/domain/repositories/IAdminRepository";
import {
  IGetAdmins,
  IResponseCreateAdmin,
  IResponseAdminById,
} from "../../core/dtos/AdminDTOs";

class AdminRepository implements IAdminRepository {
  async get(): Promise<IGetAdmins[] | []> {
    try {
      return await AdminModel.find();
    } catch (error) {
      console.error("Error fetching classes:", error);
      return [];
    }
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
