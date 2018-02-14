import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ReduxPage,
  ContactPage,
  ProfilePage
} from 'pages';
import Header from 'components/Header';
import SidebarContainer from 'containers/SidebarContainer';
import { connect } from 'react-redux';
import { bindActionCreators }from 'redux';
import * as baseActions from 'store/modules/base';
import styles from './Root.scss';
import classNames from 'classnames/bind';
import SidebarButton from 'react-icons/lib/ti/th-menu';

const cx = classNames.bind(styles);

class Root extends Component {

  handleOpen = () => {
    const { BaseActions } = this.props;
    BaseActions.setToggle({isOpen:true});
  }
  handleClose = () => {
    const { BaseActions } = this.props;
    BaseActions.setToggle({isOpen:false});
  }
  render() {
    const { handleOpen, handleClose} = this;
    const { isOpen } = this.props;

    return (
      <div className={cx('app')}>
        <SidebarContainer isOpen={isOpen} onClick={handleClose}/>
        <main>
          <div className={cx('button')} onClick={handleOpen}>
            <SidebarButton className={cx('icon')} />
          </div>
          <div className={cx('cover')}>
            <Header/>
            <div className={cx('center')}>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/redux" component={ReduxPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/contact" component={ContactPage} />
            </div>
          </div>
          <div className={cx('footer')}>
          </div>
        </main>
      </div>
    )
  }
}

export default connect(
  (state)=> ({
    isOpen: state.base.isOpen,
  }), 
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch)
  })
)(Root);