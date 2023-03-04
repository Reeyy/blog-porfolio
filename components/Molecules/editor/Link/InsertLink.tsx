import Button from 'components/Atoms/Button';
import { FC, useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import LinkForm, { LinkOption } from './LinkForm';

interface Props {
  onSubmit(link: LinkOption): void;
}

const InsertLink: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const hideForm = () => setVisible(false);
  const showForm = () => setVisible(true);
  const handleSubmit = (link: LinkOption) => {
    if (!link.url.trim()) return hideForm();
    onSubmit(link);
    hideForm();
  };
  return (
    <div
      onKeyDown={({ key }) => {
        if (key === 'Escape') hideForm();
      }}
      className='relative'
    >
      <Button onClick={visible ? hideForm : showForm}>
        <BsLink45Deg title='Insert Link' />
      </Button>
      <div className='absolute top-full mt-4 z-50'>
        <LinkForm visible={visible} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default InsertLink;
