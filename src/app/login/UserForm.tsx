"use client";

import useSignup from "./useSignUp";

export default function UserForm() {
  const { signUpWithEmail, LoginWithEMail } = useSignup();
  return (
    <>
      <button onClick={signUpWithEmail}>Sign up</button>
      <button onClick={LoginWithEMail}>Log in</button>
    </>
  );
}
