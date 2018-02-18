import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';
import marked from 'marked';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// http://prismjs.com/#languages-list
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
      state = {
            html : ''
      }
     
      renderMarkdown = () => {
            const { markdown } = this.props;
            if(!markdown){
                  this.setState ({html : ''});
                  return ;
            }
            this.setState({
                  html: marked(markdown, {
                        breaks: true, //일반 엔터로 새줄 입력
                        sanitize: true //마크다운 내부 html무시
                  })
            });
      }

      componentWillMount(){
            //cdm이 아닌 이유는 서버사이드 렌더링을 할 때도 진행되어야 하기 때문
            this.renderMarkdown();
      }

      componentDidUpdate(prevProps, prevState){
            if(prevProps.markdown !== this.props.markdown){
                  this.renderMarkdown();
            }
            if(prevState.html !== this.state.html){
                  Prism.highlightAll();
            }
      }

      render(){
            const { html } = this.state;
            const markup = {
                  __html: html
            };

            return (
                  <div className={cx('markdown-render')} 
                              dangerouslySetInnerHTML={markup}>
                  </div>
            );
      }
}

export default MarkdownRender;