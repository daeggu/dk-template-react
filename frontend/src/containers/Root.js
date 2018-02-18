import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { inform } from 'lib/shouldCancel';
import { EditorPage } from 'pages';
import BaseContainer from 'containers/BaseContainer';

class Root extends Component {

  componentDidMount() {
    inform();
  }
  render() {
    return (
      <div>
          <Switch>
              <Route path="/editor" component={EditorPage} />
              <Route path="/" component={BaseContainer} />
          </Switch>
      </div>

    )
  }
}

export default Root;