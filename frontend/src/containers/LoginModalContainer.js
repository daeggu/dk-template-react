import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import onClickOutside from 'react-onclickoutside';

class LoginModalContainer extends Component {
      handleLogin = async () => {
            const { BaseActions, password } = this.props;
            try{
                  await BaseActions.login(password);
                  BaseActions.hideModal('login');
                  localStorage.logged = "true";
            }catch(e){
                  console.error(e);
            }
      }
      handleChange = (e) => {
            const { value } = e.target;
            const { BaseActions } = this.props;
            BaseActions.changePasswordInput(value);
      }
      handleKeyPress = (e) => {
            if(e.key === 'Enter'){
                  this.handleLogin();
            }
      }
      handleClickOutside  = evt => {
            const { BaseActions } = this.props;
            BaseActions.hideModal('login');
       }
   
      render() {
            const { 
                  handleLogin, handleChange, handleKeyPress
            } = this;
            const { error, password } = this.props;

            return (
                  <LoginModal
                        onLogin={handleLogin} onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        error={error} password={password}
                  />
            );
      }
}

export default connect(
      (state) => ({
            password : state.base.getIn(['loginModal', 'password']),
            error : state.base.getIn(['loginModal', 'error'])
      }),
      (dispatch) => ({
             BaseActions: bindActionCreators(baseActions, dispatch)
      })
)(onClickOutside(LoginModalContainer));