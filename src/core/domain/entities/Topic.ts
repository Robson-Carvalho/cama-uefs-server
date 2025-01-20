import { Schema, model } from "mongoose";

const TopicSchema = new Schema(
  {
    title: { type: String, required: true },
    classID: { type: Schema.Types.ObjectId, ref: "Class" },
    content: { type: String, required: true },
    next: { type: Schema.Types.ObjectId, ref: "Topic", default: null },
    previous: { type: Schema.Types.ObjectId, ref: "Topic", default: null },
  },
  {
    timestamps: true,
  }
);

const Topic = model("Topic", TopicSchema);

module.exports = { Topic };
