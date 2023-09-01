'use client'

import { useState } from "react"
import TextInput from "@/components/text-input/text-input";

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // todo
  }

  return(
    <form>
      <TextInput id="first-name-input" label="First name" handleOnChange={(event) => setFirstName(event.target.value)} value={firstName} key="first-name-input" />
      <TextInput id="email-input" label="Email" handleOnChange={(event) => setEmail(event.target.value)} value={email} key="email-input" />
      <TextInput id="password-input" label="Password" handleOnChange={(event) => setPassword(event.target.value)} value={password} key="password-input" inputType="password" />
      <TextInput id="confirm-password-input" label="Confirm password" handleOnChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} key="confirm-password-input" inputType="password" />
      <button onClick={handleRegister}>Register</button>
    </form>
  )
}