import { useState } from 'react';
import { getDownloadURL, ref, uploadString } from '@firebase/storage';
import { firestore, storage } from '../libs/firebase';
import { doc, setDoc } from '@firebase/firestore';

import 'draft-js/dist/Draft.css';
import { Editor, EditorState } from 'draft-js';

const EditorPage = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      ref={(element) => {
        // this.editor = element;
      }}
    />
  );
};

export default EditorPage;
