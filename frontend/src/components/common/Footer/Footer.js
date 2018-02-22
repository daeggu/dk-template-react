import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import logo from 'static/images/logo.png';

const cx = classNames.bind(styles);

const Footer = () => {
      return (
            <div className={cx('footer')}>
                 <img className={cx('des')} src={logo} alt="logo"/>
            </div>
      );
};

export default Footer;