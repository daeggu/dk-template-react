import React from 'react';
import UserContainer from 'containers/UserContainer';
import Section from 'components/Section';
import Title from 'components/Title';
import Content from 'components/Content';

import { bindActionCreators } from 'redux';
import * as usersActions from 'store/modules/users';
import { Helmet } from 'react-helmet';

const ReduxPage = () => {
      return (
            <Section>
                  <Helmet>
                        <title>Redux</title>
                  </Helmet>
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

//custom static func
//필요에 따라 params, query도 받아와도 된다.(Action에 값이 필요한 경우)
ReduxPage.preload = (dispatch) => {
      const UserActions = bindActionCreators(usersActions, dispatch);
      //API종류가 여러개라면 return Promise.all([action1(), actions2()]) 형태로..
      return UserActions.getUsers();
}
export default ReduxPage;