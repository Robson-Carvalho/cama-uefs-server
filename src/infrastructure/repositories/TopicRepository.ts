import { ClassModel } from "../../core/domain/entities/Class";
import { TopicModel } from "../../core/domain/entities/Topic";
import { ITopicRepository } from "../../core/domain/repositories/ITopicRepository";
import { ITopic } from "../../core/dtos/TopicDTOs";

class TopicRepository implements ITopicRepository {
  async getByClassId(id: string): Promise<ITopic[] | []> {
    try {
      return await TopicModel.find({ classID: id });
    } catch (error) {
      console.error("Error fetching topics:", error);
      return [];
    }
  }

  async get(): Promise<ITopic[] | []> {
    try {
      return await TopicModel.find();
    } catch (error) {
      console.error("Error fetching topics:", error);
      return [];
    }
  }

  async getTopicByClassAndPath(
    classPath: string,
    topicPath: string
  ): Promise<ITopic | null> {
    try {
      const classData = await ClassModel.findOne({ path: classPath });
      if (!classData) return null;

      const topicData = await TopicModel.findOne({
        classID: classData._id,
        path: topicPath,
      });

      return topicData || null;
    } catch (error) {
      console.error("Error fetching topic by class and path:", error);
      throw new Error("Database query error");
    }
  }

  async getById(id: string): Promise<ITopic | null> {
    try {
      return await TopicModel.findById(id);
    } catch (error) {
      console.error("Error fetching topic by ID:", error);
      return null;
    }
  }

  async getByPath(path: string): Promise<ITopic | null> {
    try {
      return await TopicModel.findOne({ path });
    } catch (error) {
      console.error("Error fetching topic by path:", error);
      return null;
    }
  }

  async create(
    title: string,
    content: string,
    path: string,
    classID: string
  ): Promise<ITopic | null> {
    try {
      return await TopicModel.create({ title, content, classID, path });
    } catch (error) {
      console.error("Error creating topic:", error);
      throw error;
    }
  }

  async update(
    id: string,
    title: string,
    content: string,
    path: string,
    classID: string
  ): Promise<ITopic | null> {
    try {
      return await TopicModel.findByIdAndUpdate(id, {
        title,
        content,
        path,
        classID,
      });
    } catch (error) {
      console.error("Error updating topic:", error);
      return null;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await TopicModel.findByIdAndDelete(id);
    } catch (error) {
      console.error("Error deleting topic:", error);
      throw error;
    }
  }
}

export { TopicRepository };
