import React from "react";
import Form from "./reusable/Form";
import Joi from "joi-browser";

const LoginForm = () => {
  const data = {
    username: "",
    password: "",
  };
  const schema = {
    username: Joi.string().email().min(5).max(30).required().label("User Name"),
    password: Joi.string().min(5).max(30).required().label("Password"),
  };

  const inputProps = [
    { name: "username", type: "email", label: "Username" },
    { name: "password", type: "password", label: "Password" },
  ];

  return (
    <Form
      data={data}
      formName="Login"
      schema={schema}
      inputProps={inputProps}
    />
  );
};

export default LoginForm;
