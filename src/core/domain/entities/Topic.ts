import { Schema, model } from "mongoose";

const TopicSchema = new Schema(
  {
    title: { type: String, required: true },
    classID: { type: Schema.Types.ObjectId, ref: "classes" },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const TopicModel = model("topics", TopicSchema);

export { TopicModel };
