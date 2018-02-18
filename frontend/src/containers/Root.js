import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { inform } from 'lib/shouldCancel';
import BaseContainer from 'containers/BaseContainer';
import EditorContainer from 'containers/EditorContainer';

class Root extends Component {

  componentDidMount() {
    inform();
  }
  render() {
    return (
      <div>
          <Switch>
              <Route path="/editor" component={EditorContainer} />
              <Route path="/" component={BaseContainer} />
          </Switch>
      </div>

    )
  }
}

export default Root;