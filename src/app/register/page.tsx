'use client'

import { useState } from "react"

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return(
    <form>
      <label htmlFor='first-name-input'>First name</label>
      <input name='first-name-input' id='first-name-input' type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>

      <label htmlFor='email-input'>Email</label>
      <input name='email-input' id='email-input' type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>

      <label htmlFor='password-input'>Password</label>
      <input name='password-input' id='password-input' type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>

      <label htmlFor='confirm-password-input'>Confirm password</label>
      <input name='confirm-password-input' id='confirm-password-input' type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}></input>
    </form>
  )
}