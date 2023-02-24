import Editor from 'components/Molecules/editor';
import { FC } from 'react';

interface Props {}

const Create: FC<Props> = (props): JSX.Element => {
  return (
    <div className='max-w-4xl mx-auto'>
      <Editor />
    </div>
  );
};

export default Create;
