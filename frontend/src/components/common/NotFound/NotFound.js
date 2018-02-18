import React from 'react';
import styles from './NotFound.scss';
import classNames from 'classnames/bind';
import Button from 'components/base/Button';

const cx = classNames.bind(styles);

const NotFound = ({onGoBack}) => (
  <div className={cx('not-found')}>
    <h2>
      존재하지 않는 페이지입니다.
    </h2>
    <Button 
      invert
      xPadding="1rem"
      onClick={onGoBack}>
      돌아가기
    </Button>
  </div>
);

export default NotFound;