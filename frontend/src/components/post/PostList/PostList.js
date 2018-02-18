import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Content from 'components/post/Content';
import Pagination from 'components/post/Pagination';

const cx = classNames.bind(styles);

const PostList = () => {
      const postArr = [
            {
                  title : 'title',
                  time : 'time',
                  tags : 'tags'
            },
            {
                  title : 'title2',
                  time : 'time',
                  tags : 'tags'
            },
            {
                  title : 'title2',
                  time : 'time',
                  tags : 'tags'
            },
      ];

      const render =
      postArr.map((post, i) => {
            return (
                 <Link  key={i} to={`/posts/${i}`}>
                        <p></p>
                        <Title>
                              {post.title} 
                        </Title>
                        <Content>
                              {post.time} {post.tags} 
                        </Content>
                  </Link>
            );
      });

      return (
            <div>
                  <Section >
                  {render}
                  </Section>
                  <Pagination/>
            </div>
      );
};

export default PostList;