import React from 'react';
import PostContainer from 'containers/PostContainer';
import AskRemoveModalContainer from 'containers/AskRemoveModalContainer';

const PostPage = ({match}) => {
      const { id } = match.params;
      return (
         <div>
            <PostContainer id={id}/>
            <AskRemoveModalContainer />
         </div>
      );
};

export default PostPage;