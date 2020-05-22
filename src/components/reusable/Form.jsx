import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./Input";

const Form = ({ data: newData, formName, schema, inputProps }) => {
  const [data, setData] = useState(newData);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    const error = { ...errors };
    const errorMessage = validateProperty(name, value, schema);
    if (errorMessage) error[name] = errorMessage;
    else delete error[name];

    setData({ ...data, [name]: value });
    setErrors(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(data, schema);
    if (errors !== null) return setErrors(errors);

    console.log("access granted");
  };

  const validate = (data) => {
    const { error } = Joi.validate(data, schema, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    error.details.forEach((e) => (errors[e.path] = e.message));
    return errors;
  };

  const validateProperty = (name, value) => {
    const obj = { [name]: value };

    const newSchema = { [name]: schema[name] };

    const { error } = Joi.validate(obj, newSchema);

    return error ? error.details[0].message : null;
  };

  return (
    <div>
      <h1>{formName}</h1>
      <form onSubmit={handleSubmit}>
        {inputProps.map((input) => (
          <Input
            key={input.name}
            value={data[input.name]}
            name={input.name}
            onChange={handleChange}
            error={errors[input.name]}
            label={input.label}
            type={input.type}
          />
        ))}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={validate(data) !== null ? true : false}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
