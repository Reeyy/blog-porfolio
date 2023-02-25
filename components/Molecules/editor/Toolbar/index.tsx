import { FC } from 'react';
import { Editor } from '@tiptap/react';
import DropdownOptions from '../DropdownOptions';
import { getFocusedEditor } from 'utils/EditorUtils';
import { AiFillCaretDown } from 'react-icons/ai';
import HeadToolBar from './HeadToolBar';
import Button from 'components/Atoms/Button';

import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsBraces,
  BsCode,
  BsListUl,
  BsListOl,
  BsImageFill,
  BsLink45Deg,
  BsYoutube,
} from 'react-icons/bs';
import { RiDoubleQuotesL } from 'react-icons/ri';

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
    <div className='flex items-center bg-gray-300 p-2 rounded-md gap-x-2'>
      <DropdownOptions
        options={ToolBarOptions}
        head={<HeadToolBar editor={editor} />}
      />
      <div className='h-9 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8' />
      <div className='flex items-center space-x-4'>
        <Button onClick={() => getFocusedEditor(editor).toggleBold().run()}>
          <BsTypeBold title='Bold' />
        </Button>
        <Button onClick={() => getFocusedEditor(editor).toggleItalic().run()}>
          <BsTypeItalic title='Italic' />
        </Button>
        <Button>
          <BsTypeUnderline
            title='Underline'
            onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
          />
        </Button>
        <Button onClick={() => getFocusedEditor(editor).toggleStrike().run()}>
          <BsTypeStrikethrough title='Strike Through' />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        >
          <RiDoubleQuotesL title='Double Quote' />
        </Button>
        <Button onClick={() => getFocusedEditor(editor).toggleCode().run()}>
          <BsCode title='Code' />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        >
          <BsBraces title='Code Block' />
        </Button>
        <Button>
          <BsLink45Deg title='Link' />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
        >
          <BsListUl title='UL List' />
        </Button>
        <Button
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <BsListOl title='OL List' />
        </Button>
        <Button>
          <BsImageFill title='Image' />
        </Button>
        <Button>
          <BsYoutube title='Youtube' />
        </Button>
      </div>
    </div>
  );
};

export default ToolBar;
