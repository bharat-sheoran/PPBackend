// models/ResponseStatus.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface for the ResponseStatus document
export interface IResponseStatus extends Document {
  userId: string;
  collegeEmail: string;
  collegeRollNumber: string;
  numbers: number[];
  alphabets: string[];
}

// Define the schema for the ResponseStatus model
const userSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  collegeEmail: {
    type: String,
    required: true,
    unique: true,
  },
  collegeRollNumber: {
    type: String,
    required: true,
  },
  numbers: {
    type: [Number], // Array of numbers
    required: true,
  },
  alphabets: {
    type: [String], // Array of strings
    required: true,
  },
});

// Create and export the ResponseStatus model
const User = mongoose.model<IResponseStatus>('User', userSchema);

export default User;