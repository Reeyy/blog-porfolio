import { FC, useState } from 'react';
import { ValidUrl } from 'utils/ValidUrl';
export type LinkOption = {
  url: string;
  openInNewTab: boolean;
};
interface Props {
  visible: boolean;
  onSubmit(link: LinkOption): void;
}

const LinkForm: FC<Props> = ({ visible, onSubmit }): JSX.Element | null => {
  const [url, setUrl] = useState<LinkOption>({ url: '', openInNewTab: false });
  if (!visible) return null;
  const handleSubmit = () => {
    if (!url.url.trim()) return;
    onSubmit({ ...url, url: ValidUrl(url.url) });
    resetForm();
  };

  const resetForm = () => {
    setUrl({ url: '', openInNewTab: false });
  };

  return (
    <div className='rounded text-left bg-secondary-dark animate-reveal z-50 dark:shadow-secondary-dark shadow-md p-2'>
      <div className='flex items-center space-x-2'>
        <input
          autoFocus
          type='text'
          className='rounded bg-transparent border-2 border-secondary-light focus:ring-0 outline-secondary-light focus:outline-secondary-light transition text-primary accent-secondary-light'
          placeholder='https://example.com'
          value={url.url as string}
          onChange={({ target }) => setUrl({ ...url, url: target.value })}
        />
      </div>

      <div className='mt-2 flex items-center space-x-1 text-sm select-none text-secondary-dark dark:text-secondary-light'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={({ target }) =>
            setUrl({ ...url, openInNewTab: target.checked })
          }
          className='focus:ring-0 rounded-sm w-3 h-3 outline-none'
          checked={url.openInNewTab}
        />
        <label className='text-white' htmlFor='checkbox'>
          open in new tab
        </label>

        <div className='text-right flex-1'>
          <button
            onClick={handleSubmit}
            className='bg-secondary-light text-black font-semibold text-sm px-2 py-1 rounded'
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
