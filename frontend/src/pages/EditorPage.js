import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeaderContainer from 'containers/EditorHeaderContainer';
import EditorPaneContainer from 'containers/EditorPaneContainer';
import PreviewPaneContainer from 'containers/PreviewPaneContainer';

const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}
    />
  );
};

export default EditorPage;