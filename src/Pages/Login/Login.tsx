import React from 'react'
import {Route, Switch } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm'
import SignUp from '../SignUp/SignUp';

const Login:React.FC = () =>{
  return(
      <Switch>
        <Route path="/" exact  component={LoginForm} />
        <Route path="/signup" component={SignUp} />
      </Switch>
  );
}

export default Login