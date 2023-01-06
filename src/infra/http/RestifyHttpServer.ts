import restify, { Request, Response, pre } from 'restify';
import IHttpServerAdapter, { createRouterGetAndDeleteParams, createRouterPostAndPutParams } from './IHttpServerAdapter';

class RestifyHttpServer implements IHttpServerAdapter {

  server: any

  constructor() {
    this.server =
      restify.createServer({})
  }

  async createRouterGet({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
    for (const midd of middleware) {
      this.server.pre(midd);
    }
    this.server.get(url, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query);
      return response.json(result);
    });
  }

  async createRouterDelete({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
    for (const midd of middleware) {
      this.server.pre(midd);
    }
    this.server.delete(url, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query);
      return response.json(result);
    });
  }

  async createRouterPost({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
    for (const midd of middleware) {
      this.server.pre(midd);
    }
    this.server.post(url, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query, request.body);
      return response.json(result);
    });
  }

  async createRouterPut({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
    for (const midd of middleware) {
      this.server.pre(midd);
    }
    this.server.put(url, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query, request.body);
      return response.json(result);
    });
  }

  startServerHttp(port: number) {
    this.server.listen(port, () => {
      console.log(`Estou no ar com Restify e Nodemon na porta ${port}`)
    });
  }
}

export default RestifyHttpServer;