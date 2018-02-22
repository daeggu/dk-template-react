import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import WriteIcon from 'react-icons/lib/fa/edit';
import LogIn from 'react-icons/lib/md/lock-outline';
import LogOut from 'react-icons/lib/md/lock-open';
import logo from 'static/images/logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({postId, onLogin, logged}) => {
      return (
            <div className={cx('header')}>
                  <div className={cx('image')}>
                        
                        <div className={cx('info')}>
                              <div className={cx('title')}>
                                 <img className={cx('logo')} src={logo} alt="logo"/>
                              </div>
                              <div className={cx('icon')}>
                                 {logged &&
                                    <Link to="/editor">
                                          <WriteIcon/>
                                    </Link>
                                  }

                                 <div className={cx('right')}
                                          onClick={onLogin}>
                                    {logged ? <LogOut/> : <LogIn/>}
                                 </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Header;