import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Presentation/Pages/SectionPages/Login/Login'
import Produtos from './Presentation/Pages/ProdutosPages/produtos/ProdutosRoutes/ProdutosRoutes'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/produtos" exact component={Produtos} />
        <Route path="*" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
