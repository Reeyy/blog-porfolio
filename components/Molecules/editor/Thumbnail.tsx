import clsx from 'clsx';
import ThumbnailPreview from 'components/Atoms/ThumbnailPreview';
import { FC, useEffect, useState } from 'react';

interface Props {
  initialVal?: string;
  onChange: (file: File) => void;
}

const commonClassNames =
  'border border-dashed aspect-video p-2 border-secondary-dark flex items-center justify-center rounded cursor-pointer';
const Thumbnail: FC<Props> = ({ initialVal, onChange }): JSX.Element => {
  const [seletedThumbnail, setSelectedThumbnail] = useState<string>('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { files } = target;
    if (!files) return;
    const file = files[0];
    setSelectedThumbnail(URL.createObjectURL(file));
    onChange(file);
  };
  useEffect(() => {
    if (typeof initialVal === 'string') setSelectedThumbnail(initialVal);
  }, [initialVal]);

  return (
    <div className='w-32'>
      <input
        type='file'
        id='thumbnail'
        onChange={handleChange}
        hidden
        accept='image/jpg,image/png,image/jpeg'
      />
      <label htmlFor='thumbnail' className='w-full h-full block'>
        {seletedThumbnail ? (
          <img
            src={seletedThumbnail}
            alt='selected'
            className={(clsx(commonClassNames), 'object-cover')}
          />
        ) : (
          <ThumbnailPreview label='Thumbnail and Og:image' />
        )}
      </label>
    </div>
  );
};

export default Thumbnail;
