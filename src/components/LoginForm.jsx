import React from "react";
import Form from "./reusable/Form";
import Joi from "joi-browser";
import { login } from "../services/authService";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

const LoginForm = ({ location: { state } }) => {
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

      window.location = state ? state.from.pathname : "/";
      return null;
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        return ex.response.data;
      }
    }
  };

  if (auth.getCurrentUser()) return <Redirect to="/" />;

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
