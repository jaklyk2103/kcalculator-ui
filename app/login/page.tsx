"use client";

import TextInput from "../../components/text-input/text-input";
import { useRouter } from "next/navigation";
import { browser } from "process";
import { useState } from "react";

import "../register/form.css";

export default function Login() {
  const loginUrl = String(process.env.NEXT_PUBLIC_LOGIN_URL);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //@ts-ignore
  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      console.log("login url: ", loginUrl);
      await fetch(loginUrl, {
        body: JSON.stringify({ email, password }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        method: "POST",
      });
      router.push("/");
    } catch (error) {
      console.log("Error during logging in: ", error);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <form className="flex w-2/3 flex-col gap-10 items-center mt-10 bg-indigo-200 p-10">
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

        <div>
          <button className="register__button" onClick={handleLogIn}>
            Log in
          </button>
          <div>
            <a
              className="text-sm text-link-500 hover:underline"
              href="/register"
            >
              Create an account
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
