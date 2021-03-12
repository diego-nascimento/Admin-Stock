import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Presentation/Pages/SectionPages/Login/Login'
import Layout from './Presentation/Components/Layout/Layout'
import { UserStorage } from './Main/Context/userContext'

export default function Routes() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/estoque/*" exact component={Layout} />
        <Route path="*" component={Login} />
      </Switch>
      </UserStorage>
    </BrowserRouter>
  );
}
