import mongoose, { Schema } from "mongoose";

const { String } = Schema.Types;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [20, "Title must be 20 character long."],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [50, "Description must be 50 character long."],
    },
    body: {
      type: String,
      required: [true, "Post body is required"],
      minLength: [300, "Post body must be 300 character long."],
    },
  },
  { autoIndex: true, timestamps: true }
);

export const Article =
  mongoose.models["article"] || mongoose.model("article", ArticleSchema);
