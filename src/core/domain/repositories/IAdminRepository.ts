import { IAdmin, IGetAdmins, IResponseAdminById } from "../../dtos/AdminDTOs";

interface IAdminRepository {
  get(): Promise<IGetAdmins[] | []>;
  create(name: string, email: string, password: string): Promise<string | null>;
  getById(_id: string): Promise<IResponseAdminById | null>;
  getByEmail(email: string): Promise<IAdmin | null>;
  update(
    _id: string,
    name: string,
    email: string,
    password: string
  ): Promise<void>;
  delete(_id: string): Promise<void>;
}

export { IAdminRepository };
