import HttpServerSingleton from '../infra/http/HttpServerSingleton';
import MainController from '../controller/MainController';
import mainMiddleware from '../middleware/main.middleware ';

export default class MainRoutes {
  constructor() {
    const mainController = new MainController();
    HttpServerSingleton.getInstance().createRouterGet({ url: "/", callback: mainController.getMessage, middleware: [mainMiddleware] });
  }
}
