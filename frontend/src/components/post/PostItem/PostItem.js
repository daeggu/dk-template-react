import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import moment from 'moment';
import MarkdownRender from 'components/common/MarkdownRender';
import Button from 'components/base/Button';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

const PostItem = ({
            title, body, tags, publishedDate,
            logged, postId, onRemove}) => {
      return (
            <div>
            <Helmet>
                  <title>{title}</title>
            </Helmet>
            <Section>
            <Title 
                  button={
                        logged && 
                        <div className={cx('buttons')}>
                              <Button 
                                    color="dark"
                                    round
                                    to={`/editor?id=${postId}`}>수정</Button>
                              <Button 
                                    color="dark"
                                    round
                                    onClick={onRemove}>삭제</Button>
                        </div>}
                  
                  >{title}</Title>
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
            </div>
      );
};

export default PostItem;