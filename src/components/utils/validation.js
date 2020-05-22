import Joi from "joi-browser";
const schema = {
  username: Joi.string().email().min(5).max(30).required().label("User Name"),
  password: Joi.string().min(5).max(30).required().label("Password"),
};

export const validate = (data) => {
  const { error } = Joi.validate(data, schema, { abortEarly: false });
  if (!error) return null;

  const errors = {};
  error.details.forEach((e) => (errors[e.path] = e.message));
  return errors;
};

export const validateProperty = (name, value) => {
  const obj = { [name]: value };

  const newSchema = { [name]: schema[name] };

  const { error } = Joi.validate(obj, newSchema);

  return error ? error.details[0].message : null;
};
