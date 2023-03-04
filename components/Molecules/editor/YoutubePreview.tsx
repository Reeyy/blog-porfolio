import Button from 'components/Atoms/Button';
import { FC, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';

interface Props {
  onSubmit(link: string): void;
}

const YoutubePreview: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [url, setUrl] = useState('');
  const [visible, setVisible] = useState(false);
  const hideForm = () => setVisible(false);
  const showForm = () => setVisible(true);
  const handleSubmit = () => {
    if (!url.trim()) return hideForm();
    onSubmit(url);
    setUrl('');
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
        <BsYoutube />
      </Button>
      {visible && (
        <div className='absolute top-full mt-4 bg-secondary-dark p-2 rounded z-50'>
          <div className='flex items-center space-x-2 '>
            <input
              autoFocus
              type='text'
              className='rounded bg-transparent border-2 border-secondary-light focus:ring-0 outline-secondary-light focus:outline-secondary-light transition text-primary accent-secondary-light'
              placeholder='https://youtube.com'
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <button
              onClick={handleSubmit}
              className='bg-secondary-light text-black font-semibold text-sm px-2 py-1 rounded'
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubePreview;
