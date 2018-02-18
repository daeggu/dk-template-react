import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ReduxPage,
  ContactPage,
  ProfilePage,
  PostListPage,
  PostPage,
} from 'pages';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import * as baseActions from 'store/modules/base';
import PageTemplate from 'components/common/PageTemplate';
import SidebarContainer from 'containers/SidebarContainer';
import LoginModalContainer from 'containers/LoginModalContainer';
import HeaderContainer from 'containers/HeaderContainer';


class BaseContainer extends Component {

  initialize = async () => {
    const { BaseActions } = this.props;
    if(localStorage.logged === 'true'){
      BaseActions.tempLogin();
    }
    BaseActions.checkLogin();
  }
  componentDidMount() {
    this.initialize();
  }

  handleOpen = () => {
    const { BaseActions } = this.props;
    BaseActions.setToggle({isOpen:true});
  }
  handleClose = () => {
    const { BaseActions } = this.props;
    BaseActions.setToggle({isOpen:false});
  }
  render() {
    const { handleOpen, handleClose} = this;
    const { isOpen } = this.props;

    return (
      <div>
        <LoginModalContainer/>
        <PageTemplate 
            sidebar={<SidebarContainer isOpen={isOpen} onClick={handleClose}/>}
            header={<HeaderContainer/>}
            onOpen={handleOpen}>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile" component={ProfilePage} />
            <Switch>
                <Route path="/posts/page/:page" component={PostListPage}/>
                <Route path="/posts/:id" component={PostPage}/>
                <Route path="/posts" component={PostListPage}/>
            </Switch>
            <Route path="/contact" component={ContactPage} />
            <Route path="/redux" component={ReduxPage} />
        </PageTemplate>
      </div>

    )
  }
}

export default connect(
  (state)=> ({
    isOpen: state.base.get('isOpen'),
  }), 
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch)
  })
)(BaseContainer);