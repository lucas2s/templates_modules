import HttpServer from './infra/http/HttpServerSingleton';
import './routes/main.routes';

HttpServer.startServerHttp(3000);
