import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostContainer from 'containers/PostContainer';
import AskRemoveModalContainer from 'containers/AskRemoveModalContainer';
import ModalWrapper from 'components/modal/ModalWrapper';
import * as postActions from 'store/modules/post';

class PostPage extends Component {

      render(){
            const { match, visible } = this.props;
            return(
                  <div>
                        <PostContainer id={match.params.id}/>
                        <ModalWrapper visible={visible}>
                              <AskRemoveModalContainer />
                        </ModalWrapper>
                  </div>
            );
      }
}

PostPage.preload = (dispatch, params) => {
      const { id } = params;
      const PostActions = bindActionCreators(postActions, dispatch);
      return PostActions.getPost(id);
}

export default connect(
      (state) => ({
            visible: state.base.getIn(['modal', 'remove'])
      }),
      null
)(PostPage);