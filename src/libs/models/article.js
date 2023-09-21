import mongoose, { Schema } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: String,
    description: String,
    body: String,
  },
  { autoIndex: true, timestamps: true }
);

export const Article =
  mongoose.models["articles"] ||
  mongoose.model("articles", ArticleSchema, "articles");
