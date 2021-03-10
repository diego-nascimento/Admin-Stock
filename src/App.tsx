import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Routes from './routes'
import {GlobalStyles} from './Global/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
    <GlobalStyles />
    <Routes />
    </>
  );
}

export default App;
