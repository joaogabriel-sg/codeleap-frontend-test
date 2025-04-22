import { api } from "@/shared/libs/api";
import { Pagination } from "@/shared/types/pagination";

import { Post } from "../types/posts.types";

class PostsService {
  async list(): Promise<Pagination<Post>> {
    const { data } = await api.get<Pagination<Post>>("/careers/");
    return data;
  }
}

export const postsService = new PostsService();
