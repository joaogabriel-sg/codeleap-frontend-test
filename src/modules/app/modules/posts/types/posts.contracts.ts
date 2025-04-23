import { Pagination } from "@/shared/types/pagination";

import { Post } from "./posts.types";

export type InputCreatePost = {
  content: string;
  title: string;
  username: string;
};

export type InputDeletePost = {
  id: number;
};

export type InputListPosts = {
  limit: number;
  offset: number;
};

export type InputUpdatePost = {
  content: string;
  id: number;
  title: string;
};

export type OutputCreatePost = Post;

export type OutputListPosts = Pagination<Post>;

export type OutputUpdatePost = Post;
