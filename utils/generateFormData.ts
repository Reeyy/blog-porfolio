import { FinalPost } from 'components/Molecules/editor';

export const genereateFormData = (post: FinalPost) => {
  const formData = new FormData();
  for (let key in post) {
    const value = (post as any)[key];
    if (key === 'tags' && value.trim()) {
      const tags = value.split(',').map((tag: string) => tag.trim());
      formData.append(key, JSON.stringify(tags));
    } else formData.append(key, value);
  }
  return formData;
};
