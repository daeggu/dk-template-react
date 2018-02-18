import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';

import Button from 'components/base/Button';
import Input from 'components/base/Input';
import SocialLoginButton from 'components/base/SocialLoginButton';

const cx = classNames.bind(styles);

const LoginModal = ({
  password, error, onLogin,  onChange, onKeyPress
}) => (
   <div className={cx('login-modal')}>
      <div className={cx('bar')}></div>
      <div className={cx('content')}>
            <b>관리자 로그인</b><p></p>
            <Input 
                  value={password}
                  name="password"
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  fullWidth
                  placeholder="비밀번호"
                  type="password"/>
            <Button
                  color="dark"
                  flex padding="0.6rem"
                  className={cx('login')}
                  onClick={onLogin}
                  >로그인</Button>
            { error && <div className={cx('error')}>로그인 실패</div> }
            <div className={cx('separator')}>
                  <div className={cx('or')}>OR</div>
            </div>
            <div>
                  <SocialLoginButton/>
            </div>
      </div>
  </div>

);

export default LoginModal;