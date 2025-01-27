import { Schema } from "mongoose";

interface ITopicWithOutContent {
  _id: Schema.Types.ObjectId;
  name: string;
  path: string;
}

interface IContentMap {
  classID: Schema.Types.ObjectId;
  className: string;
  classPath: string;
  topics: Array<ITopicWithOutContent>;
}

export { IContentMap };
