import MainDomain from '../domain/MainDomain';

export default class MainController {

  async getMessage(params: any, query: any) {
    const main_domain = new MainDomain();
    return main_domain.showMessage();
  }
}