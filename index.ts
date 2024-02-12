"use strict";

import { PostRepositoryPrisma } from "./src/infra/orm/prisma/prisma";
import { createServer } from "./src/infra/webserver/server";
import { postRoutes } from "./src/interfaces/routes/posts.route";

export const start = async (): Promise<void> => {
  try {
    const server = await createServer();
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    postRoutes(server, new PostRepositoryPrisma());
    return server.start();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});

start();
