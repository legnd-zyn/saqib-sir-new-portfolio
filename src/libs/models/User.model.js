import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
  {
    name: {
      required: [true, "Name field is required."],
      minLength: [2, "Name must be 2 character long."],
      type: Schema.Types.String,
    },
    email: {
      required: [true, "Email field is required."],
      type: Schema.Types.String,
      unique: true,
      trim: true,
    },
    password: {
      type: Schema.Types.String,
    },
  },
  { autoIndex: true, timestamps: true }
);

export const Admins =
  mongoose.models["admin"] || mongoose.model("admin", AdminSchema);
