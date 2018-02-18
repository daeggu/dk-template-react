import React from 'react';
import PostItem from 'components/post/PostItem'

const PostPage = ({match}) => {
      return (
      
         <PostItem match={match}/>
      );
};

export default PostPage;