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
  EditorPage,
} from 'pages';
import SidebarContainer from 'containers/SidebarContainer';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import * as baseActions from 'store/modules/base';
import SidebarButton from 'react-icons/lib/ti/th-menu';
import { inform } from 'lib/shouldCancel';

import LoginModal from 'components/modal/LoginModal';
import PageTemplate from 'components/template/PageTemplate';

class Root extends Component {

  componentDidMount() {
    inform();
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
        <PageTemplate 
            sidebar={<SidebarContainer isOpen={isOpen} onClick={handleClose}/>}
            onOpen={handleOpen}>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile" component={ProfilePage} />
            <Switch>
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
)(Root);