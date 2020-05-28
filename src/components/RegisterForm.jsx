import React from "react";
import Form from "./reusable/Form";
import { register } from "../services/userService";

import Joi from "joi-browser";

const RegisterForm = ({ history }) => {
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

  const handleSubmitData = async (data) => {
    try {
      const response = await register(data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
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
      formName="Register"
      schema={schema}
      inputProps={inputProps}
      handleSubmitData={handleSubmitData}
    />
  );
};
export default RegisterForm;
