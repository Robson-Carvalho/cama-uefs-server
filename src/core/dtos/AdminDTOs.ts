import { Schema } from "mongoose";

interface IAdmin {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
}

export { IAdmin };
