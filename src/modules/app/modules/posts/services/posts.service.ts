import { api } from "@/shared/libs/api";
import { Pagination } from "@/shared/types/pagination";

import {
  InputCreatePost,
  InputDeletePost,
  InputListPosts,
  InputUpdatePost,
  OutputCreatePost,
  OutputListPosts,
  OutputUpdatePost,
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

  async list(input: InputListPosts): Promise<OutputListPosts> {
    const { data } = await api.get<Pagination<Post>>("/careers/", {
      params: {
        limit: input.limit,
        offset: input.offset,
      },
    });
    return data;
  }

  async update(input: InputUpdatePost): Promise<OutputUpdatePost> {
    const { data } = await api.patch<Post>(`/careers/${input.id}/`, {
      content: input.content,
      title: input.title,
    });
    return data;
  }
}

export const postsService = new PostsService();
