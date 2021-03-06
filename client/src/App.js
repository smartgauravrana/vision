import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Feed from './containers/Feed/Feed';
import Auth from './containers/Auth/Auth';
import blogCategory from './containers/Blog/BlogCategory/BlogCategory';
import NewPost from './containers/Post/NewPost/NewPost';
import Welcome from './components/Welcome/Welcome';
import Username from './containers/Username/Username';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path='/username' component={Username} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/NewPost' component={NewPost} />
        <Route path='/blogCategory' component={blogCategory} />
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

