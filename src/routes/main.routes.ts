import HttpServer from '../infra/http/HttpServerSingleton';
import MainController from '../controller/MainController';
import mainMiddleware from '../middleware/main.middleware ';

const mainController = new MainController();

HttpServer.createRouterGet({ url: "/", callback: mainController.getMessage, middleware: [mainMiddleware] });