import HttpServerSingleton from './infra/http/HttpServerSingleton';
import ExpressHttpServer from './infra/http/ExpressHttpServer';
import FastifyHttpServer from './infra/http/FastifyHttpServer';
import RestifyHttpServer from './infra/http/RestifyHttpServer';
import MainRoutes from './routes/main.routes';

new HttpServerSingleton(new RestifyHttpServer());
new MainRoutes();

HttpServerSingleton.getInstance().startServerHttp(3000);