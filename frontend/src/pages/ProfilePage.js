import React from 'react';
import Section from 'components/Section';
import Title from 'components/Title';
import Content from 'components/Content';
import Images from 'components/Images';
import rackers1 from 'static/images/rackers1.png';
import rackers2 from 'static/images/rackers2.png';
import melody from 'static/images/melody.png';
import magicstar1 from 'static/images/magicstar1.png';
import magicstar2 from 'static/images/magicstar2.png';
import exp from 'static/images/exp.png';
import { Helmet } from 'react-helmet';

const expImageArr = [
      {
            url : exp,
            alt : 'Technical Experience'
      }
];

const rackersImageArr = [
      {
            url : rackers1,
            alt : 'Rackers Main View'
      },
      {
            url : rackers2,
            alt : 'Rackers Recommend View'
      },
];

const melodyImageArry = [
      {
            url : melody,
            alt : 'Melody Master Main view'
      }
];

const magicstarImageArr = [
      {
            url : magicstar1,
            alt : 'MagicStar Main View'
      },
      {
            url : magicstar2,
            alt : 'MagicStar Menu'
      },
];

const ProfilePage = () => {
      return (
            <div>
                  <Section>
                        <Helmet>
                              <title>Profile</title>
                        </Helmet>
                        <Title>Technical Skills Summary</Title>
                        <Content>
                              <p></p><b>Client: </b> Android(NDK), IOS 
                              <p></p><b>DB: </b> Oracle, Mysql, MongoDB 
                              <p></p><b>Server: </b> Spring, Node.js(Express, Koa)
                              <p></p><b>Web: </b> React, Vue, SpringBoot + thymeleaf, Websocket, Sass, Responsvie Web
                              <p></p><b>Infra: </b> Cloud(AWS, GCP), CI/CD(Terraform, Packer, Ansible, Jenkins, Azkaban)
                              <p></p><b>etc: </b> Machine Learning, DSP(STFT, OpenCV), Matlab, ELK, nGrinder
                        </Content>
                  </Section>
                  <Section>
                        <Title>Technical Experience</Title>
                        <Content>
                              <p></p><b>Samsung - </b> Server Engineer (2014.03. ~ current)
                              <ul>
                                   <li>AWS Infra 설계/구축 (Global/DailyEvent: 80 million)</li>
                                   <li>Docker를 활용한 효율적인 CI/CD환경 구축</li>
                                   <li>부하에 따라 AutoScaling가능한 환경 구축</li>
                                   <li>SpringBoot Backend, FrontEnd 구성</li>
                                   <li>Rect ServerSiderendering Project진행</li>
                                   <li>Node.js (Express, Koa) Backend 구성</li>
                              </ul>
                              <p></p>
                              <Images outline ImageArr={expImageArr}/>
                        </Content>
                  </Section>
                  <Section>
                        <Title>Projects</Title>
                        <Content>
                              <p><b>Rackers </b> (2013 ~ 2014) </p>
                              &emsp;사용자 맞춤형 뉴스 추천 시스템입니다. 나와 비슷한 사용자들이 좋아 할만한
                              컨텐츠를 제공 해주며, 현재 IT업계에서 가장 이슈가 되고 있는 Keywords를 한눈에
                              볼 수 있는 Web Service입니다.
                              <p><b>Skill: </b>Machine Learning, Lucene, Morpheme analysis, Crawling, 
                              Spring, Mysql</p>
                              <Images outline ImageArr={rackersImageArr}/>
                              <p><b>Melody Master </b> (2012 ~ 2013) </p>
                              &emsp;사용자가 허밍 또는 악기음을 통하여 녹음하면 바로 악보를 만들어 주는 App이며,
                              화성악에 기반하여 분위기에 맞는 코드를 추천 해주는 기능도 포함하고 있습니다.
                              STFP를 활용하여 악보를 표현 하였으며, Laplacian Edge Detection방식으로 정확도를 높혔습니다.                           
                              Embedded Software Contest 최우수상 수상작입니다.
                              <p><b>Skill: </b>Android NDK, Matlab, DSP(STFT, Image Processing) </p>
                              <Images outline ImageArr={melodyImageArry}/>
                              <p><b>MagicStar </b> (2010 ~ 2011) </p>
                              &emsp;마술하는 사람들이 휴대폰을 활용하여 마술을 할 수 있도록 제공한 1세대 휴대폰 마술 App이며,
                              소셜 네트워트 서비스와 커뮤니티 공간도 제공합니다.
                              <p><b>Skill: </b>Android, mysql, php</p>
                              <Images outline ImageArr={magicstarImageArr}/>
                        </Content>
                  </Section>
            </div>
      );
};

export default ProfilePage;