import { Schema, model } from "mongoose";
import { IClass } from "../../dtos/ClassDTOs";
import { TopicModel } from "./Topic";

const ClassSchema = new Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

ClassSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    const classDoc = this;
    try {
      await TopicModel.deleteMany({ classID: classDoc._id });
      next();
    } catch (error: any) {
      console.error("Error deleting associated topics:", error);
      next(error);
    }
  }
);

const ClassModel = model<IClass>("classes", ClassSchema);

export { ClassModel };
