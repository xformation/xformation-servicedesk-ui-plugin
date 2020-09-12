import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Charts } from './Charts';
import { config } from '../config';

export default function init() {
  setTimeout(function () {
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path={`${config.basePath}/charts`} component={Charts} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('servicedesk-main-container')
    );
  }, 100);
}