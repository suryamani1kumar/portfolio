import { EMAIL_REGEX, NAME_REGEX, PHONE_REGEX } from '../static';

export const contactForm = (contact, blurError) => {
  return [
    {
      label: 'Name*',
      type: 'text',
      value: contact.name,
      id: 'name',
      required: true,
      name: 'name',
      error: blurError.name,
    },

    {
      label: 'Email*',
      type: 'email',
      value: contact.email,
      id: 'email',
      name: 'email',
      required: true,
      error: blurError.email,
    },
    {
      label: 'Phone*',
      type: 'text',
      value: contact.phone,
      id: 'phone',
      name: 'phone',
      required: false,
      error: blurError.phone,
    },
  ];
};

export const erroronBlur = (e, SetblurError) => {
  const err = {};
  const { name, value } = e.target;
  switch (name) {
    case 'name':
      if (!value) {
        err.name = `Name* is Required`;
        SetblurError(err);
      } else if (!NAME_REGEX.test(value)) {
        err.name = `Enter Name is not valid`;
        SetblurError(err);
      }
      break;
    case 'email':
      if (!value) {
        err.email = `Email* is Required`;
        SetblurError(err);
      } else if (!EMAIL_REGEX.test(value)) {
        err.email = `Enter Email is not valid`;
        SetblurError(err);
      }
      break;
    case 'phone':
      if (!value) {
        err.phone = `Phone* is Required`;
        SetblurError(err);
      } else if (!PHONE_REGEX.test(value)) {
        err.phone = `Enter Phone is not valid`;
        SetblurError(err);
      }
      break;
    case 'message':
      if (!value) {
        err.message = `Comment* is Required`;
        SetblurError(err);
      }
      break;
    default:
  }
};

export const validation = (contact, SetblurError) => {
  let err = {};
  let status = false;
  if (!contact.name) {
    err.name = `Name* is Required`;
    SetblurError(err);
    status = true;
  }
  if (!contact.email) {
    err.email = `Email* is Required`;
    SetblurError(err);
    status = true;
  }
  if (!contact.phone) {
    err.phone = `Phone* is Required`;
    SetblurError(err);
    status = true;
  }
  if (!contact.message) {
    err.message = `Comment* is Required`;
    SetblurError(err);
    status = true;
  }
  return status;
};
