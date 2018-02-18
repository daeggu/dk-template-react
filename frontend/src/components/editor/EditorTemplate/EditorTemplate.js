import React, { Component } from 'react';
import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
  render() {
    const { header, editor, preview } = this.props;
    return (
      <div className={cx('editor-template')}>
        { header }
        <div className={cx('panes')}>
          <div className={cx('pane', 'editor')}>
            {editor}
          </div>
          <div className={cx('pane', 'preview')}>
            {preview}
          </div>
        </div>
      </div>
    );
  }
}

export default EditorTemplate;