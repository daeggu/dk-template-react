import React, { Component } from 'react';
import PostList from 'components/post/PostList';
import PostItem from 'components/post/PostItem';
import Pagination from 'components/post/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base';
import * as listActions from 'store/modules/list';
import shouldCancel from 'lib/shouldCancel';  

class PostListContainer extends Component {

      getPostList = async () => {
            if(shouldCancel()) return ;
            const { page, tag, ListActions } = this.props;
            try{
                  await ListActions.getPostList({page, tag});
            }catch(e){
                  console.error(e);
            }
      }

      componentDidMount(){
            this.getPostList();
      }
      
      componentDidUpdate(prevProps, prevState) {
            const { ListActions } = this.props;
            if(prevProps.page !== this.props.page 
                  || prevProps.tag !== this.props.tag) {
            this.getPostList();
            ListActions.setSelectedPost({index: 0, id: null});
            document.documentElement.scrollTop = 200; 
         }
      }

      handleSelectedPost = ({index, id}) => {
            const { ListActions } = this.props;
            ListActions.setSelectedPost({index, id});
            document.documentElement.scrollTop = 200; 
      }
      handleRemove = () => {
            const { BaseActions } = this.props;
            BaseActions.showModal('remove');
      }
      render() {
         
            const { loading, page, logged,
                  posts, lastPage, error, tag, index, id  } = this.props;
            const { handleSelectedPost, handleRemove } = this;
            if(loading) return null;

            return (
                  <div>
                        { (id !== null && posts[index]) &&
                           <PostItem 
                              post={posts[index]}
                              logged={logged}
                              onRemove={handleRemove}/>}
                         
                        <PostList 
                              postId={id}
                              postIndex={index}
                              posts={posts}
                              error={error}
                              onClickIndex={handleSelectedPost}
                              />
                        <Pagination 
                              page={page}
                              lastPage={lastPage}
                              tag={tag} />  
                  </div>
            );
      }
}

export default connect(
      (state) => ({
            lastPage : state.list.get('lastPage'),
            posts : state.list.get('posts').toJS(),
            loading : state.pender.pending['list/GET_POST_LIST'],
            error : state.list.get('error'),
            id : state.list.getIn(['selected', 'id']),
            index : state.list.getIn(['selected', 'index']),
            logged : state.base.get('logged')
      }),
      (dispatch) => ({
            ListActions : bindActionCreators(listActions, dispatch),
            BaseActions: bindActionCreators(baseActions, dispatch)
      })
)(PostListContainer);
