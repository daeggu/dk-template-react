import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = ({children, button}) => {
      return (
            <div className={cx('title')}>
                  {children}
                  <div className={cx('button')}>
                         {button}
                  </div>
            </div>
      );
};

export default Title;