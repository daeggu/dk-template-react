import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';
import Button from 'components/base/Button';

const cx = classNames.bind(styles);

const Title = ({children, button, post}) => {
      return (
            <div className={cx('title')}>
                  {children}
                  <div className={cx('button')}>
                        {post && 
                             <Button 
                             color="dark"
                             round
                             to="/posts">뒤로</Button>
                        }
                         {button}
                  </div>
            </div>
      );
};

export default Title;