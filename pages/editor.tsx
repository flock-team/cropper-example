import { useState } from 'react';
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { getDownloadURL, ref, uploadString } from '@firebase/storage';
import { firestore, storage } from '../libs/firebase';
import { doc, setDoc } from '@firebase/firestore';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Image from '@tiptap/extension-image';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    // 実際には、ダイアログ立ち上げてクロッピング&アップロード&画像表示URL取得
    const imageURL = window.prompt('URL');

    if (imageURL) {
      editor.chain().focus().setImage({ src: imageURL }).run();
    }
  };

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        太字
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
      >
        表
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        イタリック
      </button>
      <button onClick={addImage}>画像</button>
    </>
  );
};

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
    ],
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
