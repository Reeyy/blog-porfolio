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
import InsertLink from '../Link/InsertLink';
import { LinkOption } from '../Link/LinkForm';
import YoutubePreview from '../YoutubePreview';

interface Props {
  editor: Editor | null;
  onOpenImageClick?: () => void;
}

// * END Toolbar options

const ToolBar: FC<Props> = ({
  editor,
  onOpenImageClick,
}): JSX.Element | null => {
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
  const handleLinkSubmit = ({ url, openInNewTab }: LinkOption) => {
    const { commands } = editor;
    if (openInNewTab) {
      commands.setLink({ href: url, target: '_blank' });
    } else commands.setLink({ href: url });
  };
  /**
   * It sets the focus on the editor and then sets the youtube video.
   * @param {string} url - The URL of the YouTube video.
   */
  const handleYoutubePreview = (url: string) => {
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };
  return (
    <div className='flex items-center  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-secondary-dark  p-2 rounded-md gap-x-2'>
      <DropdownOptions
        options={ToolBarOptions}
        head={<HeadToolBar editor={editor} />}
      />
      <div className='h-9 w-[2px] bg-secondary-dark  mx-8' />
      <div className='flex items-center space-x-4'>
        <Button
          active={editor.isActive('bold')}
          onClick={() => getFocusedEditor(editor).toggleBold().run()}
        >
          <BsTypeBold title='Bold' />
        </Button>
        <Button
          active={editor.isActive('italic')}
          onClick={() => getFocusedEditor(editor).toggleItalic().run()}
        >
          <BsTypeItalic title='Italic' />
        </Button>
        <Button
          active={editor.isActive('underline')}
          onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
        >
          <BsTypeUnderline title='Underline' />
        </Button>
        <Button
          active={editor.isActive('strike')}
          onClick={() => getFocusedEditor(editor).toggleStrike().run()}
        >
          <BsTypeStrikethrough title='Strike Through' />
        </Button>
        <Button
          active={editor.isActive('blockquote')}
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        >
          <RiDoubleQuotesL title='Double Quote' />
        </Button>
        <Button
          active={editor.isActive('code')}
          onClick={() => getFocusedEditor(editor).toggleCode().run()}
        >
          <BsCode title='Code' />
        </Button>
        <Button
          active={editor.isActive('codeBlock')}
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        >
          <BsBraces title='Code Block' />
        </Button>
        <InsertLink onSubmit={handleLinkSubmit} />
        <Button
          active={editor.isActive('bulletList')}
          onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
        >
          <BsListUl title='Bullet List' />
        </Button>
        <Button
          active={editor.isActive('orderedList')}
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <BsListOl title='Ordered List' />
        </Button>
        <Button onClick={onOpenImageClick}>
          <BsImageFill title='Image' />
        </Button>
        <YoutubePreview onSubmit={handleYoutubePreview} />
      </div>
    </div>
  );
};

export default ToolBar;
