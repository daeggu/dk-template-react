import React from 'react';

// https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
export default function asyncComponent(getComponent) {
  class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };
    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        });
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

  //코드 스플릿 & SSR 충돌방지.. 
  //SSR할 때 코드 스플릿이 되면 첨에 랜더링되고..
  //Component = null; 이 반환될 때 흰화면 나오는 현상 없애기 위해
  //아래 static함수를 넣어줌
  AsyncComponent.getComponent = () => {
    return getComponent().then(({ default: Component }) => {
      AsyncComponent.Component = Component;
    });
  }

  return AsyncComponent;
}