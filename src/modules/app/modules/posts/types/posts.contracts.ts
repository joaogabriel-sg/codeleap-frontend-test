import { Pagination } from "@/shared/types/pagination";

import { Post } from "./posts.types";

export type InputCreatePost = {
  content: string;
  title: string;
  username: string;
};

export type OutputCreatePost = Post;

export type OutputListPosts = Pagination<Post>;
