import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';
import Title from 'components/post/Title';
import Content from 'components/post/Content';

const cx = classNames.bind(styles);

const PreviewPane = ({markdown, title}) => (
  <div className={cx('preview-pane')}>
      { title &&
        <div className={cx('title')}>
          <Title>
            {title}
          </Title>  
        </div>
      }
      <Content>
        <MarkdownRender markdown={markdown}/>
      </Content>
  </div>
);

export default PreviewPane;