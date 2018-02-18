import React from 'react';
import PostContainer from 'containers/PostContainer';
import AskRemoveModalContainer from 'containers/AskRemoveModalContainer';
import * as postActions from 'store/modules/post';
import { bindActionCreators } from 'redux';

const PostPage = ({match}) => {
      const { id } = match.params;
      return (
         <div>
            <PostContainer id={id}/>
            <AskRemoveModalContainer />
         </div>
      );
};

PostPage.preload = (dispatch, params) => {
      const { id } = params;
      const PostActions = bindActionCreators(postActions, dispatch);
      return PostActions.getPost(id);
}

export default PostPage;