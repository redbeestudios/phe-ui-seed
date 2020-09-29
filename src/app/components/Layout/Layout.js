import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from '../../routes/routes';
import './Layout.scss';

export default () => {
  return (
    <div className="app__content">
      <div className="content">
        <BrowserRouter basename="/ms/ui-chargeback">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};
