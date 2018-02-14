import React from 'react';
import UserContainer from 'containers/UserContainer';
import Section from 'components/Section';
import Title from 'components/Title';
import Content from 'components/Content';

const ReduxPage = () => {
      return (
            <Section>
                  <Title>
                        ServerSide rendering (with Redux)
                  </Title>
                  <Content>
                  <p></p>
                        &emsp;<b>https://jsonplaceholder.typicode.com/users</b> API를 통해서 받아온 결과를
                        <b>Redux</b>의 Store에 저장한 뒤 <b>서버에서 랜더링</b> 하여 보여주는 Page입니다.
                        FrontEnd Server와 API Server모두 US에 있는 저사양 서버이다 보니 Response시간까지 조금 걸리네요.
                        현재 보시는 페이지는 Client Rendering만 제공 하고 있습니다. 서버사이드 렌더링된 결과는
                        <b>Backend</b> Koa Server를 통해서 확인해 보세요!
                  <p></p><UserContainer/>
                  </Content>
            </Section>
      );
};

export default ReduxPage;
