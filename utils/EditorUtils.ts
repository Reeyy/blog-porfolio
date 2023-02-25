import { Editor } from '@tiptap/react';
export const getFocusedEditor = (editor: Editor) => {
  return editor.chain().focus();
};

// export const getFocusedUnderline = (editor: Editor) => {
//   return editor.chain().focus().toggleU;
// };
