import { api } from "@/shared/libs/api";
import { Pagination } from "@/shared/types/pagination";

import {
  InputCreatePost,
  InputDeletePost,
  OutputCreatePost,
  OutputListPosts,
} from "../types/posts.contracts";
import { Post } from "../types/posts.types";

class PostsService {
  async create(input: InputCreatePost): Promise<OutputCreatePost> {
    const { data } = await api.post<Post>("/careers/", input);
    return data;
  }

  async delete(input: InputDeletePost): Promise<void> {
    await api.delete(`/careers/${input.id}/`);
  }

  async list(): Promise<OutputListPosts> {
    const { data } = await api.get<Pagination<Post>>("/careers/");
    return data;
  }
}

export const postsService = new PostsService();
