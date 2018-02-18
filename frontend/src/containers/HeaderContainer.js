import React, { Component } from 'react';
import Header from 'components/common/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'store/modules/base';

class HeaderContainer extends Component {
      handleLoginClick = async () => {
            const { BaseActions, logged } = this.props;
            if(logged){
                  try{
                        await BaseActions.logout();
                         window.location.reload();
                  }catch(e) {
                        console.error(e);
                  }
                  return;
            }
            BaseActions.showModal('login');
            BaseActions.initializeLoginModal();
      }
      render() {
            const { handleLoginClick } = this;
            const { logged } = this.props;

            return (
                  <Header 
                        onLogin={handleLoginClick}
                        logged={logged} />
            );
      }
}

export default connect(
  (state) => ({
      logged: state.base.get('logged')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer);