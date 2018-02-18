import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

// CodeMirror 를 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
// 브라우저일때만 로딩
let CodeMirror = null;
const isBrowser = process.env.APP_ENV === 'browser';
if(isBrowser) {
  CodeMirror = require('codemirror');
  require('codemirror/mode/markdown/markdown');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/jsx/jsx');
  require('codemirror/mode/css/css');
  require('codemirror/mode/shell/shell');
}

const cx = classNames.bind(styles);

class EditorPane extends Component {

  editor = null; //에디터 ref
  codeMirror = null; //CodeMirror인스턴스
  cursor = null; // 텍스트 cursor위치

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 좌측에 라인넘버 띄우기
      lineWrapping: true // 내용이 너무 길면 다음 줄에 작성
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