import init from "../domain/OpenTicketsApp";

export class OpenTickets {
  static templateUrl = "/partials/service.html";
  constructor() {
    init();
  }
}
