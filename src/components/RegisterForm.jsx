import React from "react";
import Form from "./reusable/Form";

import Joi from "joi-browser";

const RegisterForm = (props) => {
  const data = {
    username: "",
    password: "",
    name: "",
  };
  const schema = {
    username: Joi.string().email().min(5).max(30).required().label("User Name"),
    password: Joi.string().min(5).max(30).required().label("Password"),
    name: Joi.string().min(5).max(30).required().label("Name"),
  };

  const inputProps = [
    { name: "username", type: "email", label: "Username" },
    { name: "password", type: "password", label: "Password" },
    { name: "name", type: "text", label: "Name" },
  ];

  return (
    <Form
      data={data}
      formName="Register"
      schema={schema}
      inputProps={inputProps}
    />
  );
};
export default RegisterForm;
