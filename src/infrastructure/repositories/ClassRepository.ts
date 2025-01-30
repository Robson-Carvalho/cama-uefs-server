import mongoose from "mongoose";
import { ClassModel } from "../../core/domain/entities/Class";
import { TopicModel } from "../../core/domain/entities/Topic";
import { IClassRepository } from "../../core/domain/repositories/IClassRepository";
import { IClass } from "../../core/dtos/ClassDTOs";
import { IContentMap } from "../../core/interfaces/IContentMap";
import { InternalServerError } from "../../core/errors/Errors";

class ClassRepository implements IClassRepository {
  async create(title: string, path: string): Promise<IClass | null> {
    try {
      return await ClassModel.create({ title, path });
    } catch (error) {
      console.error("Error creating class:", error);
      throw new InternalServerError("Internal Server Error");
    }
  }

  async get(): Promise<IClass[] | []> {
    try {
      return await ClassModel.find();
    } catch (error) {
      console.error("Error fetching classes:", error);
      throw new InternalServerError("Internal Server Error");
    }
  }

  async getByPath(path: string): Promise<IClass | null> {
    try {
      return await ClassModel.findOne({ path });
    } catch (error) {
      console.error("Error fetching topic by path:", error);
      throw new InternalServerError("Internal Server Error");
    }
  }

  async getContentMap(): Promise<IContentMap[]> {
    try {
      const contentMap = await ClassModel.aggregate([
        {
          $lookup: {
            from: "topics",
            localField: "_id",
            foreignField: "classID",
            as: "topics",
          },
        },
        {
          $project: {
            classID: "$_id",
            className: { $ifNull: ["$title", null] },
            classPath: "$path",
            topics: {
              $map: {
                input: "$topics",
                as: "topic",
                in: {
                  _id: "$$topic._id",
                  name: "$$topic.title",
                  path: "$$topic.path",
                },
              },
            },
          },
        },
      ]);

      return contentMap;
    } catch (error) {
      console.error("Error fetching content map", error);
      throw new InternalServerError("Internal Server Error");
    }
  }

  async getById(_id: string): Promise<IClass | null> {
    try {
      return await ClassModel.findById(_id);
    } catch (error) {
      console.error("Error fetching class by ID:", error);
      throw new InternalServerError("Internal Server Error");
    }
  }

  async getLastCreated(): Promise<IClass | null> {
    try {
      return await ClassModel.findOne().sort({ createdAt: -1 });
    } catch (error) {
      console.error("Error fetching last created class:", error);
      throw new InternalServerError("Internal Server Error");
    }
  }

  async update(_id: string, title: string, path: string): Promise<void> {
    try {
      await ClassModel.findByIdAndUpdate(_id, { title, path }, { new: true });
    } catch (error) {
      console.error("Error updating class:", error);
      throw new InternalServerError("Internal Server Error");
    }
  }

  async delete(_id: string): Promise<void> {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      await TopicModel.deleteMany({ classID: _id }, { session });

      await ClassModel.findByIdAndDelete(_id, { session });

      await session.commitTransaction();
      console.log("Class and associated topics deleted successfully.");
    } catch (error) {
      await session.abortTransaction();
      console.error("Error deleting class and associated topics:", error);
      throw new InternalServerError("Internal Server Error");
    } finally {
      session.endSession();
    }
  }
}

export { ClassRepository };
