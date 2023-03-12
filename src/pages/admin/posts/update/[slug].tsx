import axios from 'axios';
import Editor, { FinalPost } from 'components/Molecules/editor';
import AdminLayout from 'components/Organisms/layout/AdminLayout';
import mongooseConnect from 'libs/mongoose';
import Post from 'models/Post';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { genereateFormData } from 'utils/generateFormData';

interface PostRes extends FinalPost {
  id: string;
}
type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Update: NextPage<Props> = ({ post }) => {
  const handleSubmit = async (post: FinalPost) => {
    try {
      const formData = genereateFormData(post);
      const { data } = await axios.patch('/api/posts/' + post.id, formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <AdminLayout title='Update'>
      <div className='max-w-4xl mx-auto'>
        <Editor btnText='Update' initialPost={post} onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
};

interface SeverSideRespone {
  post: PostRes;
}
export const getServerSideProps: GetServerSideProps<SeverSideRespone> = async (
  context
) => {
  try {
    const slug = context.query.slug as string;
    await mongooseConnect();
    const post = await Post.findOne({ slug });
    if (!post) return { notFound: true };
    const { _id, title, content, tags, thumbnail, meta } = post;

    return {
      props: {
        post: {
          id: _id.toString(),
          title,
          content,
          tags: tags.join(','),
          thumbnail: thumbnail?.url || '',
          slug,
          meta,
        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Update;
