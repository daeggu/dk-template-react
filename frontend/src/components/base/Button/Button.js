import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

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
            to,
            ...rest}) => {
            
            const dynamicStyle = {
                  ...(xPadding ? {
                        paddingLeft: xPadding,
                        paddingRight: xPadding
                  } : {})
            }

            const Element = (to && !disabled) ? Link : Div;

            return (
                  <Element className={
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
                        to={to}
                        {...rest} >
                        {children}      
                  </Element>
      );
};

export default Button;