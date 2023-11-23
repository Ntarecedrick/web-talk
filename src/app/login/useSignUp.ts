"use client"

import { supabase } from "@/utils/supabaseclient";

const useSignup = () => {
  async function signUpWithEmail() {
    const { data, error } = await supabase.auth.signUp({
      email: "cedrickkyla@gmail.com",
      password: "default123",
    });

    if(error){
        console.log("error message:", error.message)
    }else{
        console.log("signed up successfully:",data)

    }
  }

  async function LoginWithEMail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "cedrickkyla@gmail.com",
      password: "default123",
    });

    if(error){
        console.log("error message:", error.message)
    }else{
        console.log("signed up successfully:",data)

    }
  }
  
  return {signUpWithEmail,LoginWithEMail }
};

export default useSignup;
