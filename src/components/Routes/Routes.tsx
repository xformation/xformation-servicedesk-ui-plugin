import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { Tickets } from "../../pages/Tickets";
import { AllContacts } from "../../pages/AllContacts";
import { OpenTickets } from "../../pages/OpenTickets";
import { AllCompanies } from "../../pages/AllCompanies";
import { TicketsDetails } from "../../pages/TicketsDetails";
import { Reports } from "../../pages/Reports";
import { ReportHelpdesh } from "../../pages/ReportHelpdesh";
import { Charts } from "../../pages/Charts";
import { useNavigation, prefixRoute } from "../../utils/utils.routing";
import { ROUTES } from "../../constants";

export const Routes = () => {
  useNavigation();

  return (
    <Switch>
      <Route exact path={prefixRoute(ROUTES.Dashboard)} component={Dashboard} />
      <Route exact path={prefixRoute(ROUTES.Tickets)} component={Tickets} />
      <Route exact path={prefixRoute(ROUTES.AllContacts)} component={AllContacts} />
      <Route exact path={prefixRoute(ROUTES.OpenTickets)} component={OpenTickets} />
      <Route exact path={prefixRoute(ROUTES.AllCompanies)} component={AllCompanies} />
      <Route exact path={prefixRoute(ROUTES.TicketsDetails)} component={TicketsDetails} />
      <Route exact path={prefixRoute(ROUTES.Reports)} component={Reports} />
      <Route exact path={prefixRoute(ROUTES.ReportHelpdesh)} component={ReportHelpdesh} />
      <Route exact path={prefixRoute(ROUTES.Charts)} component={Charts} />
    </Switch>
  );
};
