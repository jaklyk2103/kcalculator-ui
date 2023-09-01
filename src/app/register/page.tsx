"use client";

import { useState } from "react";
import TextInput from "@/components/text-input/text-input";
import "./form.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // todo
  };

  return (
    <div className="flex w-full justify-center">
      <form className="flex flex-col w-2/3 gap-10 items-center mt-10 bg-indigo-200 p-7">
        <TextInput
          className="register__text-input-wrapper"
          inputClassName="register__text-input"
          id="first-name-input"
          label="First name"
          handleOnChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          key="first-name-input"
        />
        <TextInput
          className="register__text-input-wrapper"
          inputClassName="register__text-input"
          id="email-input"
          label="Email"
          handleOnChange={(event) => setEmail(event.target.value)}
          value={email}
          key="email-input"
        />
        <TextInput
          className="register__text-input-wrapper"
          inputClassName="register__text-input"
          id="password-input"
          label="Password"
          handleOnChange={(event) => setPassword(event.target.value)}
          value={password}
          key="password-input"
          inputType="password"
        />
        <TextInput
          className="register__text-input-wrapper"
          inputClassName="register__text-input"
          id="confirm-password-input"
          label="Confirm password"
          handleOnChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
          key="confirm-password-input"
          inputType="password"
        />
        <button onClick={handleRegister} className="register__button">
          Register
        </button>
      </form>
    </div>
  );
}
