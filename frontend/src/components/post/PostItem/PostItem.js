import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import moment from 'moment';
import MarkdownRender from 'components/common/MarkdownRender';
import Button from 'components/base/Button';

const cx = classNames.bind(styles);

const PostItem = ({
            title, body, tags, publishedDate,
            postId, onRemove}) => {
      return (
            <Section>
            <Title>{title}</Title>
            <Button 
                  color="dark"
                  to={`/editor?id=${postId}`}>수정</Button>
            <Button color="dark" onClick={onRemove}>삭제</Button>

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