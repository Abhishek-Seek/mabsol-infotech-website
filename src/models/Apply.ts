// models/Apply.ts
import mongoose, { Schema } from "mongoose";

const ApplySchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    coverLetter: { type: String },
    resumeFilename: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.Apply ||
  mongoose.model("Apply", ApplySchema);
