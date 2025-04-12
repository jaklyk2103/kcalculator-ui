<template>
  <div className="flex w-full justify-center">
    <form
      className="flex w-2/3 flex-col gap-10 items-center mt-10 bg-indigo-200 p-10"
    >
      <TextInput
        class="register__text-input-wrapper"
        id="email-input"
        label="Email"
        @change="(event) => setEmail(event.target.value)"
        :value="email"
        key="email-input"
      />
      <TextInput
        class="register__text-input-wrapper"
        id="password-input"
        label="Password"
        @change="(event) => setPassword(event.target.value)"
        :value="password"
        key="password-input"
        inputType="password"
      />

      <div>
        <button className="register__button" @click="handleLogIn">
          Log in
        </button>
        <div>
          <a className="text-sm text-link-500 hover:underline" href="/register">
            Create an account
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref('');
const password = ref('');
const loginUrl = String(process.env.NUXT_PUBLIC_LOGIN_URL);
const router = useRouter();

const handleLogIn = async (event: Event) => {
  try {
    console.log('login url: ', loginUrl);
    await fetch(loginUrl, {
      body: JSON.stringify({ email: email.value, password: password.value }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      method: 'POST',
    });
    router.push('/');
  } catch (error) {
    console.log('Error during logging in: ', error);
  }
};

definePageMeta({
  layout: 'without-navigation',
});
</script>

import { useRouter } from "next/navigation"; import { browser } from "process";
import { useState } from "react"; import "../register/form.css"; export default
function Login() { const loginUrl = String(process.env.NEXT_PUBLIC_LOGIN_URL);
const [email, setEmail] = useState(""); const [password, setPassword] =
useState(""); const router = useRouter(); //@ts-ignore const handleLogIn = async
(event) => { event.preventDefault(); try { console.log("login url: ", loginUrl);
await fetch(loginUrl, { body: JSON.stringify({ email, password }), headers: {
Accept: "application/json", "Content-Type": "application/json",
"Access-Control-Allow-Origin": "http://localhost:3000", }, method: "POST", });
router.push("/"); } catch (error) { console.log("Error during logging in: ",
error); } }; return ( ); }
