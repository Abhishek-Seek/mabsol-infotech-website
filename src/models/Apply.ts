import mongoose, { Schema, Document } from "mongoose";

export interface IJobApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
}

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    coverLetter: { type: String, required: true },
    resumeUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.JobApplication ||
  mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema);
