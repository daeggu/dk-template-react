import React, { Component } from 'react';
import PostItem from 'components/post/PostItem';
import * as postActions from 'store/modules/post';
import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shouldCancel from 'lib/shouldCancel';

class PostContainer extends Component {
 
    initialize = async () => {
          if(shouldCancel()) return;
          const { PostActions, id } = this.props;
          try{
                await PostActions.getPost(id);
          }catch(e){
                console.error(e);
          }
    }
    componentDidMount(){
          this.initialize();
    }
    handleRemove = () => {
      const { BaseActions } = this.props;
      BaseActions.showModal('remove');
    }

    render() {
      const { loading, post, id, logged } = this.props;
      const { handleRemove } = this;

      if(loading) return null; //로딩시에는 아무것도 보여주지 않음
      
      const { title, body, publishedDate, tags } = post.toJS();

      return (
            
            <div>
            <PostItem 
                  postId={id} 
                  title={title}
                  tags={tags}
                  body={body}
                  logged={logged}
                  onRemove={handleRemove}
                  publishedDate={publishedDate}
                  />
            </div>
      )
  }
}

export default connect(
      (state) => ({
            post : state.post.get('post'),
            loading : state.pender.pending['post/GET_POST'], //로딩상태
            logged: state.base.get('logged')
      }),
      (dispatch) => ({
            PostActions: bindActionCreators(postActions, dispatch),
            BaseActions: bindActionCreators(baseActions, dispatch)
      })
)(PostContainer);