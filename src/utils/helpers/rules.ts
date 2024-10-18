const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const usernameRules = {
  required: 'Username is required',
};

export const emailRules = {
  required: 'Email is required',
  pattern: {
    value: EMAIL_REGEX,
    message: 'Invalid email',
  },
};
