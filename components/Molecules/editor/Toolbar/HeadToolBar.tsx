import { FC } from 'react';
import { Editor } from '@tiptap/react';
import { AiFillCaretDown } from 'react-icons/ai';
interface Props {
  editor: Editor | null;
}
const HeadToolBar: FC<Props> = ({ editor }): JSX.Element => {
  const getLabel = (): string => {
    if (editor!.isActive('heading', { level: 1 })) return 'Heading 1';
    if (editor!.isActive('heading', { level: 2 })) return 'Heading 2';
    if (editor!.isActive('heading', { level: 3 })) return 'Heading 3';
    return 'Paragraph';
  };
  return (
    <div className='flex items-center space-x-2 text-primary-dark dark:text-primary'>
      <p className='font-semibold '>{getLabel()}</p>
      <AiFillCaretDown />
    </div>
  );
};
export default HeadToolBar;
