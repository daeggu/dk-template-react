import React from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Contact = () => {
      return (
            <div>
                  <div className={cx('input-wrapper')}>
                        <input placeholder='Name' />
                        <input placeholder='Email' />
                  </div>
                  <textarea>
                  </textarea>
                  <div className={cx('button-wrapper')}>
                        <div className={cx('button')}>
                              Send
                        </div>
                  </div>
            </div>
      );
};

export default Contact;