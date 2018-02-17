import React from 'react';
import Section from 'components/post/Section';
import Title from 'components/post/Title';
import Images from 'components/post/Images';
import Content from 'components/post/Content';
import responsive from 'static/images/responsive.png';
import split from 'static/images/split.png';
import serverSide from 'static/images/server-side.png';
import { Helmet } from 'react-helmet';

const imageArr = [{
      url : responsive,
      alt : 'responsive web image'
}];

const splitArr = [{
      url : split,
      alt : 'Code split'
}];

const renderArr = [{
      url : serverSide,
      alt : 'Server side rendering'
}];

const HomePage = () => {
      return (
            <div>
                  <Section>
                        <Helmet>
                              <title>Daeggu</title>
                        </Helmet>
                        <Title>
                              Responsive Page
                        </Title>
                        <Content>
                              <p></p>
                              &emsp;<b>DK(β)</b>는 <b>반응형 웹</b>디자인 을 통해 어떤 크기의 화면에서도 완벽한
                              <b>DK(β) Style</b>을 보여줍니다.
                              <p></p>
                              <Images outline ImageArr={imageArr} />
                        </Content>
                  </Section>
                  <Section>
                        <Title>
                              Code Splitting
                        </Title>
                        <Content>
                              <p></p>
                              &emsp;<b>SPA</b>(Single Page Application)의 단점은, App의 규모가 커지면 자바스크립트의
                              파일 사이즈가 너무 커진다는 것입니다. 실제로 유저가 접근하지 않는
                              페이지 렌더링 스크립트도 불러오기 때문이죠. 
                              <b>DK(β)</b>는 페이지별로 파일을 나눠서 트래픽과 로딩속도를 개선 하였습니다.
                              <p></p>
                              <Images outline ImageArr={splitArr} />
                        </Content>
                  </Section>
                  <Section>
                        <Title>
                              Server Side Rendering
                        </Title>
                        <Content>
                              <p></p>
                              <b>SEO(검색 엔진 최적화)</b>&emsp;서버 사이드 렌더링을 하는 가장 큰 이유는 검색엔진 최적화를 위해서 입니다.
                              React혹은 다른 자바스크립트 라이브러리/프레임 워크로 만들어진 프로젝트 들의 경우
                              bundling되어서 적용되기 때문에 브라우저를 열어서 소스보기를 할 경우. 아무 내용도
                              표시 되지 않습니다. 따라서 구글 검색엔진을 제외한 일반적인 크롤러들이 여러분들의
                              어플리케이션이 지닌 데이터를 제대로 수집 하지 못합니다. 
                              <p></p><b>성능 개션</b>
                              &emsp;사용자가 느끼는 웹 사이트 반응속도는 Content를 처음 본 시간에 영향을 받습니다.
                              서버 사이드 렌더링을 하게 되면 첫 렌더링 된 html을 클라이언트에게 전달 해주기 때문에
                              초기 로딩속도를 많이 줄여줄 수 있습니다. 자바스크립트 파일을 불러오고, 렌더링이
                              완료되기 전에도 유저는 사이트의 컨텐츠를 이용할 수 있게 됩니다.
                              <b>DK(β)</b>는 서버사이드 렌더링이 적용되어 첫 로딩시간을 개선함과 동시에
                              검색엔진이 데이터를 정상적으로 수집할 수 있게 하였습니다.
                              <p></p>
                              <Images outline ImageArr={renderArr} />
                        </Content>
                  </Section>
            </div>
      );
};

export default HomePage;