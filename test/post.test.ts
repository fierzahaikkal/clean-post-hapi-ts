import { expect } from "chai";
import { describe, it } from "mocha";
import { Server } from "@hapi/hapi";
import { postRoutes } from "../src/interfaces/routes/posts.route";
import { PostRepositoryPrisma } from "../src/infra/orm/prisma/prisma";
import { IPost } from "../src/domain/entities/posts.interface";
import { prisma } from "../src/infra/orm/prisma/prisma";
import { PostController } from "../src/interfaces/controllers/posts.controller";

describe("Post Routes", () => {
  let server: Server;

  before(async () => {
    server = new Server({ port: process.env.PORT, host: process.env.HOST });
    postRoutes(server, new PostRepositoryPrisma());
    await server.start();
  });

  after(async () => {
    await server.stop();
  });

  it("should create a new post", async () => {
    const response = await server.inject({
      method: "POST",
      url: "/api/v1/posts",
      payload: {
        title: "Test Post",
        content: "This is a test post.",
        author: "testing",
      },
    });

    expect(response.statusCode).to.equal(201);
    expect((response.result as IPost).title).to.equal("Test Post");
  });

  it("should get all posts", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/v1/posts",
    });

    expect(response.statusCode).to.equal(200);
    expect(response.result).to.be.an("array");
  });

  it("should update a post", async () => {
    // Assuming there is already a post with id 1
    const response = await server.inject({
      method: "PATCH",
      url: "/api/v1/posts/1",
      payload: {
        title: "Updated Post",
        content: "This is an updated post.",
      },
    });

    expect(response.statusCode).to.equal(200);
    expect((response.result as IPost).title).to.equal("Updated Post");
  });

  it("should delete a post", async () => {
    // Assuming there is already a post with id 1
    const response = await server.inject({
      method: "DELETE",
      url: "/api/v1/posts/1",
    });

    expect(response.statusCode).to.equal(204);
  });
});
