import axios from 'axios';
import Editor, { FinalPost } from 'components/Molecules/editor';
import AdminLayout from 'components/Organisms/layout/AdminLayout';
import { FC } from 'react';
import { genereateFormData } from 'utils/generateFormData';

interface Props {}

const handleSubmit = async (post: FinalPost) => {
  try {
    const formData = genereateFormData(post);
    const { data } = await axios.post('/api/posts', formData);
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data);
  }
};

const Create: FC<Props> = (props): JSX.Element => {
  return (
    <AdminLayout title='Create Post'>
      <div className='max-w-4xl mx-auto'>
        <Editor onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
};

export default Create;
