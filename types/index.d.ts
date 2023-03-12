import { Schema, models, model, ObjectId, Model } from 'mongoose';
export interface PostModelSchema {
  title: string;
  slug: string;
  meta: string;
  content: string;
  tags: string[];
  thumbnail?: { url: string; public_id: string };
  author: ObjectId;
  createdAt: Date;
}
