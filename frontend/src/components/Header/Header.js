import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import WriteIcon from 'react-icons/lib/fa/edit';
import LogIn from 'react-icons/lib/md/lock-outline';
//react-icons/lib/md/lock-outline 
//react-icons/lib/md/lock-open
const cx = classNames.bind(styles);

const Header = ({handleToggle}) => {
      return (
            <div className={cx('header')}>
                  <div className={cx('image')}>
                        <div className={cx('info')}>
                              <div className={cx('title')}>
                                    <b>DK(β)</b>&nbsp;Demo
                              </div>
                              <div className={cx('icon')}>
                                 <WriteIcon/>
                                 <div className={cx('right')}>
                                    <LogIn/>
                                 </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Header;