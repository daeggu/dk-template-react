import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import moment from 'moment';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const PostItem = ({title, body, tags, publishedDate}) => {
      return (
            <Section>
            <Title>{title}</Title>
            <Content>
                  <MarkdownRender markdown={body}/>

                  <div className={cx('tags')}>
                        {tags}
                  </div>
                  <div className={cx('date')}>
                        {moment(publishedDate).format('ll')}
                  </div>
            </Content>
            </Section>
          
      );
};

export default PostItem;