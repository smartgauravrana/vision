import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  
  render() {
    return (
      <div>
        <Layout>
          <h1>Medium Blog Content</h1>
        </Layout>
      </div>
    );
  }
}

export default App;

