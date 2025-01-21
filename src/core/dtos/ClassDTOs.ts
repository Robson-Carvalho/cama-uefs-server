import { Schema } from "mongoose";

interface IClass {
  _id: Schema.Types.ObjectId;
  title: string;
  path: string;
  next: Schema.Types.ObjectId;
  previous: Schema.Types.ObjectId;
  createdAt: NativeDate;
  updatedAt: NativeDate;
}

export { IClass };
