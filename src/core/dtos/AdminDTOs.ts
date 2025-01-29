import { Schema } from "mongoose";

interface IAdmin {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

interface IGetAdmins {
  name: string;
}

interface IResponseCreateAdmin {
  _id: Schema.Types.ObjectId;
}

interface IResponseAdminById {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
}

export { IAdmin, IGetAdmins, IResponseCreateAdmin, IResponseAdminById };
