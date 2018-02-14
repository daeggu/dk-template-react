import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import avatar from 'static/images/avatar.png';
import nav from './_nav';
import GitHubIcon from 'react-icons/lib/fa/github';
import FacebookIcon from 'react-icons/lib/fa/facebook';

const cx = classNames.bind(styles);

const Sidebar = ({isOpen, history}) => {
     
     const path = history.location.pathname;
     const navList = nav.items.map((item, i)=> {
            const Icon = item.icon;
            const isActive = path === item.url;
            return (
                  <NavLink className={cx(
                              'row',{'active' : isActive})}
                              key={i} exact to={item.url}>
                        <Icon className={cx('icon')}/>
                        <div className={cx('menu')}>
                              {item.name}
                        </div>
                  </NavLink>
            );
      });

      return (
            <div>
                  <div className={cx('sidebar',{ 'hide' : !isOpen})} >
                        <div className={cx('top')}>
                              <img className={cx('avatar')} src={avatar} alt=""/>
                              <div className={cx('profile')}>
                                    <div className={cx('name')}>Daeggu</div>
                              </div>
                        </div>
                        <nav>
                              {navList}
                        </nav>
                        <div className={cx('bottom')}>
                        <a href="https://github.com/daeggu">
                                    <GitHubIcon />
                              </a>
                              <a href="https://github.com/daeggu">
                                    <FacebookIcon/>
                              </a>
                        </div>
                  </div>
            </div>
      );
};
export default Sidebar;