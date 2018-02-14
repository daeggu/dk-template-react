import React from 'react';
import styles from './Images.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Images = ({outline, ImageArr}) => {

      const Image = ImageArr.map((item, i)=>{
           const { url, alt } = item;
            return(
            <img key={i} src={url} alt={alt}
                   className={cx({'outline':outline})}>
                
            </img>);
      });
      
      return (
            <div className={cx('image-wrapper')}>
                  {Image}
            </div>
      );
};

export default Images;