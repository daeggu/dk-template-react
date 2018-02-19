import React, { Component } from 'react';
import PostListContainer from 'containers/PostListContainer';
import * as listActions from 'store/modules/list';
import { connect } from 'react-redux';
import AskRemoveModalContainer from 'containers/AskRemoveModalContainer';
import ModalWrapper from 'components/modal/ModalWrapper';
import { bindActionCreators } from 'redux';
import NotFound from 'components/common/NotFound';

class PostListPage extends Component {

      handleGoBack = () => {
            const { history } = this.props;
            history.goBack();
      }

      render() {
            const { visible, match, lastPage } = this.props;
            const { handleGoBack } = this;
            const { page = 1, tag } = match.params;
            const isNotFound = page > lastPage;
            return (
                  <div>
                         {isNotFound && 
                              <NotFound onGoBack={handleGoBack}/>}
                        <ModalWrapper visible={visible}>
                              <AskRemoveModalContainer />
                        </ModalWrapper>
                        <PostListContainer
                              tag={tag}
                              page={parseInt(page, 10)}
                        />
                  </div>
            );
      }

}

PostListPage.preload = (dispatch, params) => {
      const { page = 1, tag } = params;
      const ListActions = bindActionCreators(listActions, dispatch);
      return ListActions.getPostList({
            page, tag
      });
}

export default connect(
      (state) => ({
            visible: state.base.getIn(['modal', 'remove']),
            lastPage : state.list.get('lastPage')
      }),
      null
)(PostListPage);