import React, { Component } from 'react';
import PostList from 'components/post/PostList';
import PostItem from 'components/post/PostItem';
import Pagination from 'components/post/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import * as baseActions from 'store/modules/base';
import * as listActions from 'store/modules/list';
import shouldCancel from 'lib/shouldCancel';  
import NotFound from 'components/common/NotFound';

class PostListContainer extends Component {

      getPostList = async () => {
            if(shouldCancel()) return ;
            const { page, tag, ListActions } = this.props;
            let res = null;
            try{
                  res = await ListActions.getPostList({page, tag});
                  if(res.data.length === 0) return;
                  ListActions.setSelectedPost({id: res.data[0]._id, index : 0})
            }catch(e){
                  console.error(e);
            }
      }

      componentDidMount(){
            this.getPostList();
      }
      
      componentDidUpdate(prevProps, prevState) {
            if(prevProps.page !== this.props.page 
                  || prevProps.tag !== this.props.tag) {
            this.getPostList();
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
      handleGoBack = () => {
            const { history } = this.props;
            history.goBack();
      }

      render() {
         
            const { loading, page, logged,
                  posts, lastPage, error, index, tag } = this.props;
            const { handleSelectedPost, handleRemove, handleGoBack } = this;
            const isNotFound = page > lastPage;
            if(loading) return null;

            return (
                  <div>
                        {isNotFound && 
                              <NotFound onGoBack={handleGoBack}/>}
                        { posts[index] &&
                           <PostItem 
                              post={posts[index]}
                              logged={logged}
                              onRemove={handleRemove}/>}
                         
                        <PostList 
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
            index : state.list.getIn(['selected', 'index']),
            logged : state.base.get('logged')
      }),
      (dispatch) => ({
            ListActions : bindActionCreators(listActions, dispatch),
            BaseActions: bindActionCreators(baseActions, dispatch)
      })
)(withRouter(PostListContainer));
