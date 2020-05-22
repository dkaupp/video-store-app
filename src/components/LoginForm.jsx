import React, { useState } from "react";
import Input from "./reusable/Input";
import { validate, validateProperty } from "./utils/validation";

const LoginForm = () => {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { username, password } = inputData;

  const handleChange = ({ target: { name, value } }) => {
    const error = { ...errors };
    const errorMessage = validateProperty(name, value);
    if (errorMessage) error[name] = errorMessage;
    else delete error[name];
    setInputData({ ...inputData, [name]: value });
    setErrors(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(inputData);
    if (errors !== null) return setErrors(errors);

    console.log("access granted");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={username}
          name="username"
          label="User Name"
          onChange={handleChange}
          type="email"
          error={errors.username}
        />
        <Input
          value={password}
          name="password"
          label="Password"
          onChange={handleChange}
          type="password"
          error={errors.password}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={validate(inputData) !== null ? true : false}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
