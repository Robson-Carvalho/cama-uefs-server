import { Schema } from "mongoose";

interface ITopic {
  _id: Schema.Types.ObjectId;
  classID: Schema.Types.ObjectId;
  title: string;
  path: string;
  content: string;
  createdAt: NativeDate;
  updatedAt: NativeDate;
}

export { ITopic };
