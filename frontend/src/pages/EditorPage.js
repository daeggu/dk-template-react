import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeaderContainer from 'containers/EditorHeaderContainer';
import EditorPaneContainer from 'containers/EditorPaneContainer';
import PreviewPaneContainer from 'containers/PreviewPaneContainer';
import { Helmet } from 'react-helmet';

const EditorPage = () => {
  return (
    <div>
      <Helmet>
         <title>Editor</title>
      </Helmet>
      <EditorTemplate
        header={<EditorHeaderContainer/>}
        editor={<EditorPaneContainer/>}
        preview={<PreviewPaneContainer/>}
      />
    </div>
  );
};

export default EditorPage;