import { FC } from 'react';
import { Editor } from '@tiptap/react';
import DropdownOptions from '../DropdownOptions';
import { getFocusedEditor } from 'utils/EditorUtils';
import { AiFillCaretDown } from 'react-icons/ai';
import HeadToolBar from './HeadToolBar';
interface Props {
  editor: Editor | null;
}

// * END Toolbar options

const ToolBar: FC<Props> = ({ editor }): JSX.Element | null => {
  if (!editor) return null;
  // ! Toolbar options
  const ToolBarOptions = [
    {
      label: 'Paragraph',
      onClick: () => {
        getFocusedEditor(editor).setParagraph().run();
      },
    },
    {
      label: 'Heading 1',
      onClick: () => {
        getFocusedEditor(editor)
          .toggleHeading({
            level: 1,
          })
          .run();
      },
    },
    {
      label: 'Heading 2',
      onClick: () => {
        getFocusedEditor(editor)
          .toggleHeading({
            level: 2,
          })
          .run();
      },
    },
    {
      label: 'Heading 3',
      onClick: () => {
        getFocusedEditor(editor)
          .toggleHeading({
            level: 3,
          })
          .run();
      },
    },
  ];

  return (
    <div>
      <DropdownOptions
        options={ToolBarOptions}
        head={<HeadToolBar editor={editor} />}
      />
    </div>
  );
};

export default ToolBar;
