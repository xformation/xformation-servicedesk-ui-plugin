import init from "../domain/AllCompaniesApp";

export class AllCompanies {
  static templateUrl = "/partials/service.html";
  constructor() {
    init();
  }
}
