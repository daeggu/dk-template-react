import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPaneContainer from 'containers/EditorPaneContainer';
import PreviewPaneContainer from 'containers/PreviewPaneContainer';

const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeader/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}
    />
  );
};

export default EditorPage;