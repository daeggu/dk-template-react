import React, { Component } from 'react';
import PostItem from 'components/post/PostItem';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PostContainer extends Component {
 
    initialize = async () => {
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

    render() {
      const { loading, post } = this.props;
      if(loading) return null; //로딩시에는 아무것도 보여주지 않음
      
      const { title, body, publishedDate, tags } = post.toJS();

      return (
            
            <div>
            <PostItem  
                  title={title}
                  tags={tags}
                  body={body}
                  publishedDate={publishedDate}
                  />
            </div>
      )
  }
}

export default connect(
      (state) => ({
            post : state.post.get('post'),
            loading : state.pender.pending['post/GET_POST'] //로딩상태
      }),
      (dispatch) => ({
            PostActions: bindActionCreators(postActions, dispatch)
      })
)(PostContainer);