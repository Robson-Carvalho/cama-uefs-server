import { AdminModel } from "../../core/domain/entities/Admin";
import { IAdminRepository } from "../../core/domain/repositories/IAdminRepository";
import {
  IAdmin,
  IGetAdmins,
  IResponseAdminById,
} from "../../core/dtos/AdminDTOs";
import { InternalServerError, NotFoundError } from "../../core/errors/Errors";

class AdminRepository implements IAdminRepository {
  async update(
    _id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      await AdminModel.findByIdAndUpdate(_id, { name, email, password });
    } catch (error) {
      console.error(error);
      throw new InternalServerError("Error updated admin.");
    }
  }

  async getByEmail(email: string): Promise<IAdmin | null> {
    try {
      return await AdminModel.findOne({ email });
    } catch (error) {
      throw new InternalServerError("Error get admin by email.");
    }
  }

  async get(): Promise<IGetAdmins[] | []> {
    try {
      return await AdminModel.find();
    } catch (error) {
      console.error(error);
      throw new InternalServerError("Error fetching admins.");
    }
  }

  async create(
    name: string,
    email: string,
    password: string
  ): Promise<string | null> {
    try {
      const admin: IAdmin = await AdminModel.create({ name, email, password });

      return admin._id.toString();
    } catch (error) {
      console.error(error);
      throw new InternalServerError("Method not implemented.");
    }
  }

  async getById(_id: string): Promise<IResponseAdminById | null> {
    try {
      const _admin: IAdmin = (await AdminModel.findById({ _id })) as IAdmin;

      if (_admin === null) {
        throw new NotFoundError("Admin not found.");
      }

      const admin: IResponseAdminById = {
        _id: _admin._id,
        name: _admin.name,
        email: _admin.email,
      };

      return admin;
    } catch (error) {
      console.error(error);
      throw new InternalServerError("Error get admin by id");
    }
  }

  async delete(_id: string): Promise<void> {
    try {
      await AdminModel.findByIdAndDelete({ _id });
    } catch (error) {
      console.error(error);
      throw new InternalServerError("Error delete admin.");
    }
  }
}

export { AdminRepository };
