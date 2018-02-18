import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import moment from 'moment';
import MarkdownRender from 'components/common/MarkdownRender';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const PostItem = ({
            title, body, tags, publishedDate,
            logged, postId, onRemove}) => {
      return (
            <div>
            <Helmet>
                  <title>{title}</title>
                  <meta name="description" content={removeMd(body).slice(0, 200)}/>
            </Helmet>
            <Section>
            <Title 
                  post
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
                  <div className={cx('date')}>
                                    {moment(publishedDate).format('ll')}
                  </div>
                  <MarkdownRender markdown={body}/>

                  <div className={cx('tags')}>
                        {tags && tags.map(
                              tag => <Link key={tag} to='/posts'>#{tag}</Link>)}
                  </div>
            
            </Content>
            </Section>
            </div>
      );
};

export default PostItem;