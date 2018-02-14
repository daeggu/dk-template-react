import React, { Component } from 'react';
import Sidebar from 'components/Sidebar';
import { withRouter } from 'react-router';
import onClickOutside from 'react-onclickoutside';

class SidebarContainer extends Component {
      handleClickOutside  = evt => {
           const { onClick } = this.props;
           onClick();
      }
      render() {
            const { isOpen, history } = this.props;
            return (
                  <Sidebar 
                        isOpen={isOpen}
                        history={history}/>
            );
      }
}

export default (withRouter(onClickOutside(SidebarContainer)));