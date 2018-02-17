import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from 'store/modules/users';

class UserContainer extends Component {

      // getUserList = () => {
      //       const { UsersActions} = this.props;
      //       UsersActions.getUsers();
      // }
      // componentDidMount() {
      //       this.getUserList();     
      // }

      render() {
            const { data } = this.props;
            const userList = data.map(
                  user => <li key={user.get('id')}>{user.get('name')}</li>
            );
            return (
                  <div>
                        {userList}
                  </div>
            );
      }
}

export default connect(
      (state) => ({
            data: state.users.get('data')
      }),
      (dispatch) => ({
            UsersActions : bindActionCreators(usersActions, dispatch)
      })
)(UserContainer);