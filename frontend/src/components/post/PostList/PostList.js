import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import { Link } from 'react-router-dom';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import moment from 'moment';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const PostList = ({posts}) => {

      const render = posts.map((post)=> {
            const {_id, title, publishedDate, body, tags } = post;
            
            return (
                  <div key={_id} className={cx('post-item')}>
                        <Title>
                              <Link to={`/posts/${_id}`}>
                                    {title}
                              </Link>
                        </Title>
                        <Content>
                              <div className={cx('date')}>
                                    {moment(publishedDate).format('ll')}
                              </div>
                              <p>{removeMd(body)}</p>
                              <div className={cx('tags')}>
                              {tags && tags.map(
                               tag => <Link key={tag} to='/posts'>#{tag}</Link>)}
                              </div>
                              
                        </Content>
                  </div>
            );
      });

      return (
            <Section >
                  {render}
            </Section>
      );
};

export default PostList;