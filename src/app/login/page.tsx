'use client'

import TextInput from "@/components/text-input/text-input";
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // todo
  }

  return(
    <form className="flex flex-col gap-3 items-center mt-10">
      <TextInput id="email-input" label="Email" handleOnChange={(event) => setEmail(event.target.value)} value={email} key="email-input" />
      <TextInput id="password-input" label="Password" handleOnChange={(event) => setPassword(event.target.value)} value={password} key="password-input" inputType="password" />

      <div>
        <button onClick={handleLogin}>Login</button>
        <div>
          <a href="/register">Create an account</a>
        </div>
      </div>
    </form>
  )
}