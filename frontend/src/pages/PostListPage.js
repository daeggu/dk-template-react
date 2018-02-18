import React from 'react';
import PostListContainer from 'containers/PostListContainer';

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

export default PostListPage;