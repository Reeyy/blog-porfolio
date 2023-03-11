import Editor from 'components/Molecules/editor';
import AdminLayout from 'components/Organisms/layout/AdminLayout';
import { FC } from 'react';

interface Props {}

const Create: FC<Props> = (props): JSX.Element => {
  return (
    <AdminLayout title='Create Post'>
      <div className='max-w-4xl mx-auto'>
        <Editor
          onSubmit={(post) => {
            console.log('submit', post);
          }}
        />
      </div>
    </AdminLayout>
  );
};

export default Create;
