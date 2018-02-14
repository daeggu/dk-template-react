import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = ({handleToggle}) => {
      return (
            <div className={cx('header')}>
                  <div className={cx('image')}>
                        <div className={cx('text')}>
                              <b>DK(β)</b>&nbsp;Demo
                        </div>
                  </div>
            </div>
      );
};

export default Header;