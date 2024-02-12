import { Server } from "@hapi/hapi";
import { PostRepository } from "../../domain/repository/posts.repository";
import { PostController } from "../controllers/posts.controller";

export const postRoutes = (server: Server, postRepository: PostRepository) => {
  const postController = new PostController(postRepository);

  server.route({
    method: "POST",
    path: "/api/v1/posts",
    handler: postController.create.bind(postController),
  });

  server.route({
    method: "GET",
    path: "/api/v1/posts",
    handler: postController.getAll.bind(postController),
  });

  server.route({
    method: "PATCH",
    path: "/api/v1/posts/{id}",
    handler: postController.update.bind(postController),
  });

  server.route({
    method: "DELETE",
    path: "/api/v1/posts/{id}",
    handler: postController.delete.bind(postController),
  });
};
