import { CommentSchema } from "./comment.schema";

export interface ArticleSchema {
  id: number,
  author: string,
  title: string,
  description: string,
  image255: string,
  image825: string,
  image1800: string,
  contentText: string,
  hash: string[],
  comments: CommentSchema[]
};
