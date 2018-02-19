import React from 'react';
import styles from './Contact.scss';
import classNames from 'classnames/bind';
import Button from 'components/base/Button';
import Input from 'components/base/Input';

const cx = classNames.bind(styles);

const Contact = () => {
      return (
            <div>
                  <div className={cx('input-wrapper')}>
                        <Input flex placeholder='Name' />
                        <Input flex placeholder='Email' />
                  </div>
                  <textarea>
                  </textarea>
                  <div className={cx('button-wrapper')}>
                        <Button
                              round
                              flex
                              fontSize="1.2rem"
                              color="cyan">
                              Send
                        </Button>
                  </div>
                
            </div>
      );
};

export default Contact;