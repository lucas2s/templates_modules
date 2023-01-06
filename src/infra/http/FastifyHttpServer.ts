import Fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import IHttpServerAdapter, { createRouterGetAndDeleteParams, createRouterPostAndPutParams } from './IHttpServerAdapter';

class FastifyHttpServer implements IHttpServerAdapter {

  server: FastifyInstance = Fastify({})

  constructor() { }
  async createRouterGet({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
    for (const midd of middleware) {
      this.server.addHook('preHandler', midd);
    }
    this.server.get(url, async (request: FastifyRequest, reply: FastifyReply) => {
      const result = await callback(request.params, request.query);
      return reply.send(result);
    });
  }

  async createRouterDelete({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
    for (const midd of middleware) {
      this.server.addHook('preHandler', midd);
    }
    this.server.delete(url, async (request: FastifyRequest, reply: FastifyReply) => {
      const result = await callback(request.params, request.query);
      return reply.send(result);
    });
  }

  async createRouterPost({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
    for (const midd of middleware) {
      this.server.addHook('preHandler', midd);
    }
    this.server.post(url, async (request: FastifyRequest, reply: FastifyReply) => {
      const result = await callback(request.params, request.query, request.body);
      return reply.send(result);
    });
  }

  async createRouterPut({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
    for (const midd of middleware) {
      this.server.addHook('preHandler', midd);
    }
    this.server.put(url, async (request: FastifyRequest, reply: FastifyReply) => {
      const result = await callback(request.params, request.query, request.body);
      return reply.send(result);
    });
  }

  async startServerHttp(port: number) {
    try {
      await this.server.listen({ port });
      console.log(`Estou no ar com Fastify e Nodemon na porta ${port}`);
    } catch (err) {
      this.server.log.error(err)
      process.exit(1)
    }
  }
}

export default FastifyHttpServer;