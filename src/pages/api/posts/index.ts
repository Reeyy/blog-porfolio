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
    case 'GET': {
      await mongooseConnect();
      res.json({ ok: true });
    }
    case 'POST':
      return createPost(req, res);
  }
};

interface PostBody {
  title: string;
  content: string;
  slug: string;
  tags: string;
  meta: string;
}
const createPost: NextApiHandler = async (req, res) => {
  const { files, body } = await readFile<PostBody>(req);
  let tags = [];
  const { title, content, slug, meta } = body;
  if (body.tags) {
    tags = JSON.parse(body.tags as string);
  }
  const error = validateSchema(postValidationSchema, { ...body, tags });
  if (error) {
    return res.status(400).json(error);
  }
  await mongooseConnect();
  const alreadtyExistSlug: any = await Post.findOne({ slug: body.slug });
  if (alreadtyExistSlug) {
    return res.status(400).json({ ok: false, error: 'Slug already exist' });
  }
  //* create new post
  const newPost = new Post({
    title,
    content,
    slug,
    tags,
    meta,
  });
  //* upload image ..
  const thumbnail = files.thumbnail as formidable.File;
  if (thumbnail) {
    const { secure_url: url, public_id } = await cloudinary.uploader.upload(
      thumbnail.filepath,
      {
        folder: 'reeyy-blogs',
      }
    );
    newPost.thumbnail = { url, public_id };
  }
  await newPost.save();
  res.json({ ok: true, post: newPost });
};
export default handler;
