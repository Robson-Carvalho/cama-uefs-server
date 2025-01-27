import { Schema, model } from "mongoose";
import { ITopic } from "../../dtos/TopicDTOs";

const TopicSchema = new Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true },
    classID: { type: Schema.Types.ObjectId, ref: "classes" },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const TopicModel = model<ITopic>("topics", TopicSchema);

export { TopicModel };
