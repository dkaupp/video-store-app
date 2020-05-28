import React from "react";
import Form from "./reusable/Form";
import Joi from "joi-browser";
import { login } from "../services/authService";

const LoginForm = ({ history }) => {
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

  const handleSubmitData = async ({ username, password }) => {
    try {
      await login(username, password);

      window.location = "/";
      return null;
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        return ex.response.data;
      }
    }
  };

  return (
    <Form
      data={data}
      formName="Login"
      schema={schema}
      inputProps={inputProps}
      handleSubmitData={handleSubmitData}
    />
  );
};

export default LoginForm;
