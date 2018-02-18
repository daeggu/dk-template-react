import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown'; // 마크다운 문법 색상
// 마크다운 내부에 들어가는 코드 색상
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// CodeMirror 를 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);

class EditorPane extends Component {

  editor = null; //에디터 ref
  codeMirror = null; //CodeMirror인스턴스
  cursor = null; // 텍스트 cursor위치

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineWrapping: true,
    });
    this.codeMirror.on('change', this.handleChangeMarkdown);
  }

  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({name, value});
  }

  handleChangeMarkdown =(doc) => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor();
    onChangeInput({
      name: 'markdown',
      value : doc.getValue()
    });
  }

  componentDidMount() {
    this.initializeEditor();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.markdown !== this.props.markdown){
      const { codeMirror, cursor} = this;
      if(!codeMirror) return;
      codeMirror.setValue(this.props.markdown);
      if(!cursor) return;
      codeMirror.setCursor(cursor);
    }
  }

  render() {
    const { handleChange } = this;
    const { tags, title }  = this.props;

    return (
      <div className={cx('editor-pane')}>
          <input className={cx('title')} 
            placeholder="제목을 입력하세요"
            name="title"
            value={title}
            onChange={handleChange}
            />
          <div className={cx('code-editor')} ref={ref=>this.editor=ref}></div>
          <div className={cx('tags')}>
            <div className={cx('description')}>태그</div>
            <input 
                name="tags"
                placeholder="태그를 입력하세요 (쉼표로 구분)"
                value={tags}
                onChange={handleChange}
                />
          </div>
      </div>
    );
  }
}

export default EditorPane;