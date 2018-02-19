import React, { Component } from 'react';
import PostListContainer from 'containers/PostListContainer';
import * as listActions from 'store/modules/list';
import { connect } from 'react-redux';
import AskRemoveModalContainer from 'containers/AskRemoveModalContainer';
import ModalWrapper from 'components/modal/ModalWrapper';
import { bindActionCreators } from 'redux';

class PostListPage extends Component {

      render() {
            const { visible, match } = this.props;
            const { page = 1 } = match.params;
            return (
                  <div>
                        <ModalWrapper visible={visible}>
                              <AskRemoveModalContainer />
                        </ModalWrapper>
                        <PostListContainer
                              page={parseInt(page, 10)}
                        />
                  </div>
            );
      }

}

PostListPage.preload = (dispatch, params) => {
      const { page = 1 } = params;
      const ListActions = bindActionCreators(listActions, dispatch);
      return ListActions.getPostList({
            page
      });
}

export default connect(
      (state) => ({
            visible: state.base.getIn(['modal', 'remove'])
      }),
      null
)(PostListPage);