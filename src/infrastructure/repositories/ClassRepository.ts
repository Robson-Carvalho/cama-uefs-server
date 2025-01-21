import { ClassModel } from "../../core/domain/entities/Class";
import { IClassRepository } from "../../core/domain/repositories/IClassRepository";
import { IClass } from "../../core/dtos/ClassDTOs";

class ClassRepository implements IClassRepository {
  async create(title: string, path: string): Promise<IClass | null> {
    try {
      return await ClassModel.create({ title, path });
    } catch (error) {
      console.error("Error creating class:", error);
      return null;
    }
  }

  async get(): Promise<IClass[] | []> {
    try {
      return await ClassModel.find();
    } catch (error) {
      console.error("Error fetching classes:", error);
      return [];
    }
  }

  async getById(_id: string): Promise<IClass | null> {
    try {
      return await ClassModel.findById(_id);
    } catch (error) {
      console.error("Error fetching class by ID:", error);
      return null;
    }
  }

  async getLastCreated(): Promise<IClass | null> {
    try {
      return await ClassModel.findOne().sort({ createdAt: -1 });
    } catch (error) {
      console.error("Error fetching last created class:", error);
      return null;
    }
  }

  async update(_id: string, title: string, path: string): Promise<void> {
    try {
      await ClassModel.findByIdAndUpdate(_id, { title, path }, { new: true });
    } catch (error) {
      console.error("Error updating class:", error);
      throw new Error("Failed to update class");
    }
  }

  async delete(_id: string): Promise<void> {
    try {
      await ClassModel.findByIdAndDelete(_id);
    } catch (error) {
      console.error("Error deleting class:", error);
      throw new Error("Failed to delete class");
    }
  }
}

export { ClassRepository };
