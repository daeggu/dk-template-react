import React from 'react';

// https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
export default function asyncComponent(getComponent) {
      return class AsyncComponent extends React.Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };
    
        componentWillMount() {
          if (!this.state.Component) {
            getComponent().then(({default: Component}) => {
              AsyncComponent.Component = Component
              this.setState({ Component })
            })
          }
        }
        render() {
          const { Component } = this.state
          if (Component) {
            return <Component {...this.props} />
          }
          return null
        }
      }
}