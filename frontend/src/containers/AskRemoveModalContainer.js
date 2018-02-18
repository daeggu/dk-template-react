import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';
import { withRouter } from 'react-router-dom';
import AskRemoveModal from 'components/modal/AskRemoveModal';
import onClickOutside from 'react-onclickoutside';

class AskRemoveModalContainer extends Component {

      handleClickOutside  = evt => {
            const { BaseActions } = this.props;
            BaseActions.hideModal('remove');
       }

      handleCancel = () => {
            const { BaseActions } = this.props;
            BaseActions.hideModal('remove');
      }
      handleConfirm = async () => {
            const { BaseActions, PostActions, history, match } = this.props;
            const { id } = match.params;
            
            try{
                  await PostActions.removePost(id);
                  history.push('/posts');
                  BaseActions.hideModal('remove');
            }catch (e) {
                  console.error(e);
            }
      }
      render() {
            const { handleCancel, handleConfirm } = this;

            return (
                  <AskRemoveModal
                        onCancel= {handleCancel}
                        onConfirm={handleConfirm}/>
            );
      }
}

export default connect(
      (state) => ({
            visible: state.base.getIn(['modal', 'remove'])
      }),
      (dispatch) => ({
            BaseActions: bindActionCreators(baseActions, dispatch),
            PostActions: bindActionCreators(postActions, dispatch)
      })
)(withRouter(onClickOutside(AskRemoveModalContainer)));