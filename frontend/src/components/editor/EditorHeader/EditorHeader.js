import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/base/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit, isEdit}) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button 
            onClick={onGoBack}
            round
            invert
            fontSize="1rem"
            xPadding="1rem"
            >Back</Button>
      </div>
      <div className={cx('submit')}>
        <Button 
            onClick={onSubmit}
            round
            invert
            fontSize="1rem"
            >{ isEdit ? 'Edit' : 'Write'}
            </Button>
      </div>
    </div>
  );
};

export default EditorHeader;