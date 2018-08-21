import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Feed from './containers/Feed/Feed';
import Auth from './containers/Auth/Auth';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' exact component={Feed} />
        <Redirect to='/' />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;

