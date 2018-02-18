import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({
            children,            
            flex,
            className,
            round,
            invert,
            flat,
            color,
            padding="0.5rem",
            fontSize="1rem",
            xPadding,
            style,
            disabled,
            ...rest}) => {
            
            const dynamicStyle = {
                  ...(xPadding ? {
                        paddingLeft: xPadding,
                        paddingRight: xPadding
                  } : {})
            }

            return (
                  <div className={
                        cx('button', {
                              invert,
                              flex,
                              flat,
                              disabled,
                              round
                              }, color, className)
                        }
                        style={{
                              padding,
                              fontSize,
                              ...style,
                              ...dynamicStyle
                        }}
                        {...rest} >
                        {children}      
                  </div>
      );
};

export default Button;