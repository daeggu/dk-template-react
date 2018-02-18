import React from 'react';
import PostListContainer from 'containers/PostListContainer';
import * as listActions from 'store/modules/list';
import { bindActionCreators } from 'redux';

const PostListPage = ({match}) => {

      const { page = 1 } = match.params;
      return (
            <div>
                <PostListContainer
                  page={parseInt(page, 10)}
                />
            </div>
      );
};

PostListPage.preload = (dispatch, params) => {
      const { page = 1} = params;
      const ListActions = bindActionCreators(listActions, dispatch);
      return ListActions.getPostList({
            page
      });
}

export default PostListPage;