import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ReportHelpdesh } from './ReportHelpdesh';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/reporthelpdesh`} component={ReportHelpdesh} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('servicedesk-main-container')
    );
  }, 100);
}