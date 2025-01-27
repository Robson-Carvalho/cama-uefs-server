import { Schema, model } from "mongoose";
import { IClass } from "../../dtos/ClassDTOs";

const ClassSchema = new Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const ClassModel = model<IClass>("classes", ClassSchema);

export { ClassModel };
