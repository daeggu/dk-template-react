import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PreviewPane = ({markdown, title}) => (
  <div className={cx('preview-pane')}>
    <h1 className={cx('title')}>
      제목
    </h1>
    <div>
      내용
    </div>
  </div>
);

export default PreviewPane;