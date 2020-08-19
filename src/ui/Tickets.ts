import init from "../domain/TicketsApp";

export class Tickets {
  static templateUrl = "/partials/service.html";
  constructor() {
    init();
  }
}
