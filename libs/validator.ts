import Joi from 'joi';

export const errorMessages = {
  INVALID_TITLE: 'Title is required  can not be empty !',
  INVALID_CONTENT: 'Content is required  can not be empty !',
  INVALID_SLUG: 'Slug is required  can not be empty !',
  INVALID_TAGS: 'Tags is required  can not be empty !',
  INVALID_META: 'Meta is required  can not be empty !',
  INVALID_AUTHOR: 'Author is required  can not be empty !',
};

export const postValidationSchema = Joi.object().keys({
  title: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_TITLE,
    'any.required': errorMessages.INVALID_TITLE,
  }),
  content: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_CONTENT,
    'any.required': errorMessages.INVALID_CONTENT,
  }),
  slug: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_SLUG,
    'any.required': errorMessages.INVALID_SLUG,
  }),
  tags: Joi.array().items(Joi.string()).messages({
    'string.base': errorMessages.INVALID_TAGS,
    'string.empty': errorMessages.INVALID_TAGS,
  }),
  meta: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_META,
    'any.required': errorMessages.INVALID_META,
  }),
});

export const validateSchema = (schema: Joi.ObjectSchema, data: any) => {
  const { error } = schema.validate(data, {
    errors: { label: 'key', wrap: { label: false, array: false } },
    allowUnknown: true,
  });
  if (error) {
    const errmsg = error.details[0].message;
    return { ok: false, error: errmsg };
  }
  return '';
};
