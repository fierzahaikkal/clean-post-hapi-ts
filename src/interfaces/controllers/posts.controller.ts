import { Request, ResponseToolkit } from "@hapi/hapi";
import { PostRepository } from "../../domain/repository/posts.repository";
import { CreatePost } from "../../app/usecase/posts/posts.create";
import { GetPosts } from "../../app/usecase/posts/posts.get";
import { UpdatePost } from "../../app/usecase/posts/posts.update";
import { DeletePost } from "../../app/usecase/posts/posts.delete";

export class PostController {
  constructor(private postRepository: PostRepository) {}

  async create(request: Request, h: ResponseToolkit) {
    try {
      const { title, content, author } = request.payload as {
        title: string;
        content: string;
        author: string;
      };

      const createPost = new CreatePost(this.postRepository);
      const post = await createPost.execute({ title, content, author });

      return h.response(post).code(201);
    } catch (error) {
      return h.response({ error: error }).code(500);
    }
  }
  async getAll(request: Request, h: ResponseToolkit) {
    try {
      const getPosts = new GetPosts(this.postRepository);
      const posts = await getPosts.execute();

      return h.response(posts).code(200);
    } catch (error) {
      return h.response({ error: error }).code(500);
    }
  }

  async update(request: Request, h: ResponseToolkit) {
    try {
      const { id } = request.params;
      const { title, content, author } = request.payload as {
        title: string;
        content: string;
        author: string;
      };

      const updatePost = new UpdatePost(this.postRepository);
      const updatedPost = await updatePost.execute(id, {
        title,
        content,
        author,
      });

      if (!updatedPost) {
        return h.response({ message: "Post not found" }).code(404);
      }
      return h.response(updatedPost).code(200);
    } catch (error) {
      return h.response({ error: error }).code(500);
    }
  }

  async delete(request: Request, h: ResponseToolkit) {
    try {
      const { id } = request.params;

      const deletePost = new DeletePost(this.postRepository);
      const deleted = await deletePost.execute(id);

      if (!deleted) {
        return h.response({ message: "Post not found" }).code(404);
      }
    } catch (error) {
      return h.response({ error: error }).code(500);
    }
  }
}
