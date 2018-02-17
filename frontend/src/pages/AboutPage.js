import React from 'react';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Images from 'components/post/Images';
import Content from 'components/post/Content';
import summer1 from 'static/images/summer1.png';
import summer2 from 'static/images/summer2.png';
import winter from 'static/images/winter.png';
import { Helmet } from 'react-helmet';

const summerImageArr = [
      {
            url : winter,
            alt : 'Winter hobby'
      },
      {
            url : summer1,
            alt : 'Summer hobby1'
      },
      {
            url : summer2,
            alt : 'Summer hobby1'
      },
];

const AboutPage = () => {
      return (
            <Section>
                  <Helmet>
                        <title>About</title>
                  </Helmet>
                  <Title>
                      Daeggu
                  </Title>
                  <Content>
                        <p></p> 
                        &emsp;<b>운동</b>과 <b>개발</b>을 좋아하는 Engineer입니다.
                        현재는 <b>Server Engineer</b> 로 일하고 있으며 언제나 최신 동향을 따라가려고 노력중입니다.
                        피지크 대회 나가는것이 버킷 리스트 중 하나라서 운동 관련된 이야기나
                        기술 관련된 토론은 언제든지 환영 합니다 :) <b> (daeggu87@gmail.com)</b>
                        <p></p>
                        <Images outline ImageArr={summerImageArr}/>
                  </Content>
            </Section>
      );
};

export default AboutPage;