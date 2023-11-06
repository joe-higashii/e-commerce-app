import { useState } from 'react';
import { 
  BtnBold,
  BtnItalic,
  createButton, 
  Editor,
  EditorProvider,
  Toolbar,
  HtmlButton
} from 'react-simple-wysiwyg';

export default function CustomEditor({ onEditorChange }) {
  const [value, setValue] = useState('Digite seu comentário aqui...');

  function onChange(e) {
    const editorValue = e.target.value;
    setValue(editorValue);
    onEditorChange(editorValue);
  }

  return (
    <EditorProvider>
      <Editor value={value} onChange={onChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <HtmlButton />
          <createButton />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}
