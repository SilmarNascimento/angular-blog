import { CommentSchema } from "./comment.schema";

export interface ArticleSchema {
  id: number,
  date: string,
  title: string,
  description: string,
  image: string,
  contentText: string,
  hash: string[],
  comments: CommentSchema[]
};
