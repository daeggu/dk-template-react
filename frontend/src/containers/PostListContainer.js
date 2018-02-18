import React, { Component } from 'react';
import PostList from 'components/post/PostList';
import Pagination from 'components/post/Pagination';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list';

class PostListContainer extends Component {

      getPostList = () => {
            const { page, ListActions } = this.props;
            ListActions.getPostList({
                  page
            });
      }

      componentDidMount(){
            this.getPostList();
      }
      
      componentDidUPdate(prevProps, prevState) {
         if(prevProps.page !== this.props.page){
            this.getPostList();
            document.documentElement.scrollTop = 0; 
         }
      }

      render() {
            const { loading, page, posts, lastPage } = this.props;
            if(loading) return null;
            return (
                  <div>
                        <PostList posts={posts} />
                        <Pagination page={page} lastPage={lastPage} />  
                  </div>
            );
      }
}

export default connect(
      (state) => ({
            lastPage : state.list.get('lastPage'),
            posts : state.list.get('posts').toJS(),
            loading : state.pender.pending['list/GET_POST_LIST']
      }),
      (dispatch) => ({
            ListActions : bindActionCreators(listActions, dispatch)
      })
)(PostListContainer);