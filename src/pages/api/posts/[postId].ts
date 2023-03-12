import formidable from 'formidable';
import cloudinary from 'libs/cloudinaryConfig';
import mongooseConnect from 'libs/mongoose';
import { readFile } from 'libs/utils';
import { postValidationSchema, validateSchema } from 'libs/validator';
import Post from 'models/Post';
import { NextApiHandler } from 'next';
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'PATCH':
      return updatePost(req, res);
    default:
      res.status(404).send('Not Found');
  }
};

interface UpdatePostBody {
  title: string;
  content: string;
  slug: string;
  tags: string;
  meta: string;
}
const updatePost: NextApiHandler = async (req, res) => {
  const postId = req.query.postId as string;
  await mongooseConnect();
  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  const { files, body } = await readFile<UpdatePostBody>(req);
  let tags = [];
  if (body.tags) {
    tags = JSON.parse(body.tags as string);
  }
  const error = validateSchema(postValidationSchema, { ...body, tags });
  if (error)
    return res.status(400).json({
      ok: false,
      error,
    });
  const { title, content, slug: newSlug, meta } = body as any;
  post.title = title;
  post.content = content;
  post.slug = newSlug;
  post.tags = tags;
  post.meta = meta;
  // update thumbnail
  const thumbnail = files.thumbnail as formidable.File;
  if (thumbnail) {
    const { secure_url: url, public_id } = await cloudinary.uploader.upload(
      thumbnail.filepath,
      {
        folder: 'reeyy-blogs',
      }
    );
    const publicId = post.thumbnail?.public_id;
    if (publicId) await cloudinary.uploader.destroy(publicId);
    post.thumbnail = { url, public_id: public_id };
  }
  await post.save();
  res.json({ ok: true, post });
};

export default handler;
