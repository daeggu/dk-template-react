import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import { Link } from 'react-router-dom';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import moment from 'moment';

const cx = classNames.bind(styles);

const PostList = ({posts}) => {

      const render = posts.map((post)=> {
            const {_id, title, publishedDate, tags } = post;
            return (
                  <div key={_id}>
                        <Title>
                              <Link to={`/posts/${_id}`}>
                                    {title}
                              </Link>
                        </Title>
                        <Content>
                              {tags}
                              <p>
                                 {moment(publishedDate).format('ll')}
                              </p>
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