import React from 'react';
import styles from './Section.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Section = ({children}) => {
      return (
            <div className={cx('section')}>
                  <div className={cx('paper')}>
                      {children}
                  </div>
            </div>
      );
};

export default Section;