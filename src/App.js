import React, { Component } from 'react';
import { Router,Route, Switch,HashRouter } from 'react-router-dom';
// import createHistory from 'history/createHashHistory';

// const history = createHistory()
import Login from './containers/login';
// import TabBarPage from './containers/tabBar';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
