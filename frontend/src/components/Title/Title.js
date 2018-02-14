import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = ({children}) => {
      return (
            <div className={cx('title')}>
                  {children}
            </div>
      );
};

export default Title;