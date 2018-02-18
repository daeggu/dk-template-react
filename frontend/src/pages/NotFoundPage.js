import React from 'react';
import NotFound from 'components/common/NotFound';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({history, staticContext}) => {
  // staticContext 는 서버쪽에서만 존재합니다.
  if (staticContext) {
    staticContext.isNotFound = true;
  }
  return (
      <div>
        <Helmet>
            <title>Not Found</title>
        </Helmet>
        <NotFound onGoBack={history.goBack}/>
      </div>
  );
};

export default NotFoundPage;