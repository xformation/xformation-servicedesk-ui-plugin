import init from '../domain/DashboardApp';

export class Dashboard {
    static templateUrl = '/partials/service.html';
    constructor() {
        init();
    }
}
