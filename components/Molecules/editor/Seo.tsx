import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import InputForm from 'components/Atoms/InputForm';
import slugify from 'slugify';
import CustomImages from './imageUploadModal/CustomImages';
import { FaRegImage } from 'react-icons/fa';
export interface SeoData {
  meta: string;
  slug: string;
  tags: string;
}
interface Props {
  title?: string;
  image?: string;
  initialValue?: SeoData;
  onChange: (result: SeoData) => void;
}

const inputClassNames =
  'w-full  bg-transparent outline-none border-2 border-secondary-dark focus:border-primary-dark rounded-md transition p-2 text-primary-dark ';

const Seo: FC<Props> = ({
  title = '',
  image = '',
  onChange,
  initialValue,
}): JSX.Element => {
  const [seoData, setSeoData] = useState({
    meta: '',
    slug: '',
    tags: '',
  });
  const { meta, slug, tags } = seoData;
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    let { name, value } = target;
    if (name === 'meta' && value.length > 150) value = value.substring(0, 150);
    const newData = { ...seoData, [name]: value };
    setSeoData(newData);
    onChange(newData);
  };
  useEffect(() => {
    const slug = slugify(title.toLowerCase());
    const newValues = { ...seoData, slug };
    setSeoData(newValues);
    onChange(newValues);
  }, [title]);
  useEffect(() => {
    if (initialValue)
      setSeoData({ ...initialValue, slug: slugify(initialValue.slug) });
  }, [initialValue]);

  return (
    <div className='space-y-4 bg-secondary-light p-4 rounded-lg '>
      <h1 className='text-secondary-light text-center text-xl font-semibold  rounded-lg bg-primary-dark p-2'>
        SEO
      </h1>
      <InputForm
        onChange={handleChange}
        value={slug}
        name='slug'
        label='Slug:'
        placeholder='Slug...'
      />
      <InputForm
        value={tags}
        onChange={handleChange}
        name='tags'
        label='Tag:'
        placeholder='React,.Product Manager'
      />
      <div className='relative'>
        <textarea
          name='meta'
          onChange={handleChange}
          value={meta}
          placeholder='Meta description'
          className={clsx(inputClassNames, 'text-lg resize-none h-20')}
        />
        <p className='absolute bottom-3 right-14  text-primary-dark'>
          {meta.length}/150
        </p>
      </div>
      <p className='text-center font-semibold'>OG:IMAGE</p>
    </div>
  );
};

export default Seo;
