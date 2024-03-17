"use client";

import { useState } from "react";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const forms = {
  login: LoginForm,
  register: RegisterForm,
};

export default function AuthForm() {
  const [formType, setFormType] = useState("login");
  const Form = forms[formType];

  function switchForm() {
    setFormType(formType === "login" ? "register" : "login");
  }

  return (
    <div>
      <Form onSwitch={switchForm} />
    </div>
  );
}
