import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { OpenTickets } from './OpenTickets';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/opentickets`} component={OpenTickets} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('servicedesk-main-container')
    );
  }, 100);
}