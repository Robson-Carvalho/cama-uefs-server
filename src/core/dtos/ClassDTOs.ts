import { Schema } from "mongoose";

interface IClass {
  _id: Schema.Types.ObjectId;
  title: string;
  path: string;
  createdAt: NativeDate;
  updatedAt: NativeDate;
}

export { IClass };
