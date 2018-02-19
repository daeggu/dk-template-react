import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import moment from 'moment';
import removeMd from 'remove-markdown';
import { Link } from 'react-router-dom';
import InputError from 'components/base/InputError';

const cx = classNames.bind(styles);

const PostList = ({posts, error, onClickIndex, postIndex}) => {

      const render = posts.map((post, i)=> {
            const {_id, title, publishedDate, body, tags } = post;
            const isSelected = postIndex === i;
            const tagList = tags.map(
                  tag => <Link key={tag} to={`/tag/${tag}`}>#{tag} </Link>
                );
            const param = {id:_id , index: i};
            return (
                  <div key={_id} className={cx('post-item')}>
                        <div className={cx('header')}>
                              <div className={cx('title', {'selected' : isSelected})}
                                    onClick={()=>onClickIndex(param)} >
                                    {title}
                              </div>
                              <div className={cx('date')}>
                                  <i>{moment(publishedDate).format('ll')}</i>
                              </div>      
                        </div>
                      
                        <div className={cx('content')}>
                              <p>{removeMd(body)}</p>
                        </div>
                        {tagList &&
                        <div className={cx('tags')}>
                              {tagList}
                        </div>}
                            
                  </div>
            );
      });

      return (
            <Section >
                  <InputError error={error}/>
                  {render}
            </Section>
      );
};

export default PostList;