import React from 'react';
import styles from './PostItem.scss';
import classNames from 'classnames/bind';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Content from 'components/post/Content';

const cx = classNames.bind(styles);

const Post = ({match}) => {
      
      return (
            <Section>
            <Title>PostDetail {match.params.id}</Title>
            <Content>
                  <p></p><b>Client: </b> Android(NDK), IOS 
                  <p></p><b>DB: </b> Oracle, Mysql, MongoDB 
                  <p></p><b>Server: </b> Spring, Node.js(Express, Koa)
                  <p></p><b>Web: </b> React, Vue, SpringBoot + thymeleaf, Websocket, Sass, Responsvie Web
                  <p></p><b>Infra: </b> Cloud(AWS, GCP), CI/CD(Terraform, Packer, Ansible, Jenkins, Azkaban)
                  <p></p><b>etc: </b> Machine Learning, DSP(STFT, OpenCV), Matlab, ELK, nGrinder
            </Content>
            </Section>
          
      );
};

export default Post;