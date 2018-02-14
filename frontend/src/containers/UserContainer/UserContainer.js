import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from 'store/modules/users';
import { withDone } from 'react-router-server';

class UserContainer extends Component {

      componentWillMount() {
            const { UsersActions, data, done } = this.props;
            if(data.length !== 0) return false;
            UsersActions.getUsers().then(done, done);
      }
      render() {
            const { data } = this.props;
            const userList = data.map(
                  user => <li key={user.id}>{user.name}</li>
            );
            return (
                  <div>
                        {userList}
                  </div>
            );
      }
}

export default withDone(connect(
      (state) => ({
            data: state.users.data
      }),
      (dispatch) => ({
            UsersActions : bindActionCreators(usersActions, dispatch)
      })
)(UserContainer));