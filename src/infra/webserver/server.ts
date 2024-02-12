"use strict";
import Hapi from "@hapi/hapi";
import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import { config } from "../config/config";

export let server: Server;

export const createServer = async (): Promise<Server> => {
  const server = Hapi.server(config.server);
  server.route({
    method: "GET",
    path: "/",
    handler: (request: Request, response: ResponseToolkit) => {
      return "Hello World";
    },
  });

  return server;
};
