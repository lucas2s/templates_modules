import express, { Request, Response } from 'express';
import IHttpServerAdapter, { createRouterGetAndDeleteParams, createRouterPostAndPutParams } from './IHttpServerAdapter';

class ExpressHttpServer implements IHttpServerAdapter {

  server = express();

  constructor() { }
  async createRouterGet({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
    this.server.get(url, ...middleware, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query);
      return response.json(result);
    });
  }
  async createRouterDelete({ url, callback, middleware }: createRouterGetAndDeleteParams): Promise<any> {
    this.server.delete(url, ...middleware, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query);
      return response.json(result);
    });
  }
  async createRouterPost({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
    this.server.post(url, ...middleware, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query, request.body);
      return response.json(result);
    });
  }
  async createRouterPut({ url, callback, middleware }: createRouterPostAndPutParams): Promise<any> {
    this.server.put(url, ...middleware, async (request: Request, response: Response) => {
      const result = await callback(request.params, request.query, request.body);
      return response.json(result);
    });
  }

  startServerHttp(port: number) {
    this.server.listen(port, () => {
      console.log(`Estou no ar com Express e Nodemon na porta ${port}`)
    });
  }
}

export default ExpressHttpServer;