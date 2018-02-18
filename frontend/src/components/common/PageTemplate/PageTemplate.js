import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import SidebarButton from 'react-icons/lib/ti/th-menu';
import Footer from 'components/common/Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({sidebar, header, children, onOpen}) => {
      return (
            <div className={cx('app')}>
                  {sidebar}
                  <main>
                        <div className={cx('button')} onClick={onOpen}>
                              <SidebarButton className={cx('icon')} />
                        </div>
                        {header}
                        <div className={cx('center')}>
                              {children}
                        </div>
                        <Footer/>
                  </main>
            </div>
      );
};

export default PageTemplate;