import {
  IGetAdmins,
  IResponseAdminById,
  IResponseCreateAdmin,
} from "../../dtos/AdminDTOs";

interface IAdminRepository {
  get(): Promise<IGetAdmins[] | []>;
  create(
    name: string,
    email: string,
    password: string
  ): Promise<IResponseCreateAdmin | null>;
  getById(id: string): Promise<IResponseAdminById | null>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IAdminRepository };
