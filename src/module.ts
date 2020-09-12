import {
  Dashboard,
  Tickets,
  AllContacts,
  OpenTickets,
  AllCompanies,
  TicketsDetails,
  Reports,
  ReportHelpdesh,
  Charts
} from "./ui";
import { ConfigCtrl } from "./ConfigCtrl";

// import { loadPluginCss } from '@grafana/runtime';
// Patch since @grafana/runtime is giving error on build
declare const window: any;
export function loadPluginCss() {
  if (window.grafanaBootData.user.lightTheme) {
    require("./css/servicedesk.light.css");
  } else {
    require("./css/servicedesk.dark.css");
  }
}

loadPluginCss();

export {
  ConfigCtrl,
  Dashboard,
  Tickets,
  AllContacts,
  OpenTickets,
  AllCompanies,
  TicketsDetails,
  Reports,
  ReportHelpdesh,
  Charts
};
