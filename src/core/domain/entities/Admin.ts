import mongoose from "mongoose";
import { IAdmin } from "../../dtos/AdminDTOs";
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model<IAdmin>("admins", adminSchema);

export { AdminModel };

