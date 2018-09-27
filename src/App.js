//responsible for view layer and routing
import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Moment from 'react-moment';
import 'moment-timezone';

import Commodities from './components/Commodities';
import MultiFactor from './components/MultiFactor';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/multifactor" component={MultiFactor} />
          <Route path="/commodities" component={Commodities} />
          <Redirect to="/commodities" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
