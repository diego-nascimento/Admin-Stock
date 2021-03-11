import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Presentation/Pages/SectionPages/Login/Login'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
