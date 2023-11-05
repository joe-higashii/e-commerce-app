import { useState } from 'react';
import { 
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar
} from 'react-simple-wysiwyg';

export default function CustomEditor() {
  const [value, setValue] = useState('simple text');

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <EditorProvider>
      <Editor value={value} onChange={onChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}