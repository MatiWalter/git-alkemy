import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { Login } from './Login';

ReactDOM.render(
  <React.StrictMode>
    <AlkemyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

const AlkemyApp = () => {

  use

  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}