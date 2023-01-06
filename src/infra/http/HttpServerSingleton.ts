import ExpressHttpServer from './ExpressHttpServer';
import IHttpServer from './IHttpServerAdapter';

export default class HttpServerSingleton {

  private static instance: IHttpServer;
  constructor(httpServer: IHttpServer = new ExpressHttpServer()) {
    if (!HttpServerSingleton.instance) {
      HttpServerSingleton.instance = httpServer;
    }
    return HttpServerSingleton.instance;
  }

  public static getInstance(): IHttpServer {
    return HttpServerSingleton.instance;
  }
}

