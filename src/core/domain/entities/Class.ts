import { Schema, model } from "mongoose";

const ClassSchema = new Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true },
    next: { type: Schema.Types.ObjectId, ref: "Class", default: null },
    previous: { type: Schema.Types.ObjectId, ref: "Class", default: null },
  },
  {
    timestamps: true,
  }
);

const Class = model("Class", ClassSchema);

module.exports = { Class };
